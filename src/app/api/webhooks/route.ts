import { db } from "~/server/db"
import { verifyWebhook } from "./verification/webhook-verification"

// The secret can be found in Clerk Dashboard -> Webhooks -> choose the webhook
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

export async function POST(req: Request) {
  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    )
  }

  try {
    const { type, data } = await verifyWebhook(req, WEBHOOK_SECRET)
    let responseMessage = "Webhook processed"
    let responseStatus = 200

    switch (type) {
      case "user.created":
        // Verify that the webhook data contains a valid user ID
        if (!data.id) {
          throw new Error("No valid user found in webhook data")
        }

        // Check if user already exists to ensure we don't create duplicates
        const existingUser = await db.user.findUnique({
          where: { clerkUserId: data.id },
        })

        if (existingUser) {
          console.log(`User with ID ${data.id} already exists.`)
          responseMessage = `User with ID ${data.id} already exists.`
          responseStatus = 409
          break
        }

        // Create user in database
        await db.user.create({
          data: {
            clerkUserId: data.id,
          },
        })
        console.log("User was successfully created in the database.")
        responseMessage = `User with ID ${data.id} was successfully created.`
        responseStatus = 201
        break
      case "user.deleted":
        await db.$transaction(async db => {
          // Check if the user exists in the database
          const user = await db.user.findUnique({
            where: { clerkUserId: data.id },
          })

          if (!user) {
            console.log(`User with ID ${data.id} does not exist.`)
            responseMessage = `User with ID ${data.id} does not exist.`
            responseStatus = 404
            return
          }

          // Delete all associated data before deleting the user
          const userForms = await db.form.findMany({
            where: { createdBy: { clerkUserId: data.id } },
          })
          for (const form of userForms) {
            // Delete all blocks and responses associated with affected forms
            await db.block.deleteMany({
              where: { formId: form.id },
            })
            await db.response.deleteMany({
              where: { formId: form.id },
            })
          }
          await db.form.deleteMany({
            where: { createdBy: { clerkUserId: data.id } },
          })

          // Delete user from database
          await db.user.delete({
            where: {
              clerkUserId: data.id,
            },
          })
        })
        console.log("User and all associated data deleted successfully.")
        responseMessage = `User with ID ${data.id} was successfully deleted.`
        responseStatus = 204
        break
      default:
        console.log("Unhandled webhook event:", type)
        responseMessage = `Unhandled webhook event: ${type}. Consider adding a handler for this event or unsubscribing from it in Clerk Dashboard.`
        responseStatus = 501
        break
    }
    return new Response(responseMessage, { status: responseStatus })
  } catch (err) {
    if (err instanceof Error && err.message) {
      console.error("Error in processing webhook:", err.message)
      return new Response(err.message, { status: 400 })
    } else {
      console.error("Unknown error in processing webhook")
      return new Response("Unknown error occurred", { status: 500 })
    }
  }
}
