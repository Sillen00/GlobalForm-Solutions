import { WebhookEvent } from "@clerk/nextjs/server"
import { headers } from "next/headers"
import { Webhook } from "svix"

export async function verifyWebhook(
  req: Request,
  WEBHOOK_SECRET: string
): Promise<WebhookEvent> {
  // Get the headers
  const headerPayload = headers()
  const svix_id = headerPayload.get("svix-id")
  const svix_timestamp = headerPayload.get("svix-timestamp")
  const svix_signature = headerPayload.get("svix-signature")

  // If there are no headers, throw error
  if (!svix_id || !svix_timestamp || !svix_signature) {
    throw new Error("No Svix headers")
  }

  // Get the body
  const payload = await req.json()
  const body = JSON.stringify(payload)

  try {
    // Create a new Svix instance with our secret.
    const wh = new Webhook(WEBHOOK_SECRET)

    // Verify the payload with the headers
    let evt: WebhookEvent
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent
    return evt
  } catch (err) {
    console.error("Error verifying webhook:", err)
    throw new Error("Verification failed")
  }
}
