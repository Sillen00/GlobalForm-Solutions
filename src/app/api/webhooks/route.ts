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

    switch (type) {
      case "user.created":
        const newUser = await db.user.create({
          data: {
            clerkUserId: data.id,
          },
        })
        console.log("User was successfully created in the database: ", newUser)
        break
      case "user.deleted":
        // TODO: Delete the user from database
        // TODO: Also delete all associated forms and those forms associated blocks
        break
      default:
        // TODO: Look up other useful cases in Clerk docs
        console.log("Unhandled webhook event:", type)
        break
    }
    return new Response("Webhook processed", { status: 200 })
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
