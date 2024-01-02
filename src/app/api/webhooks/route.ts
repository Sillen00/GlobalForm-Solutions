import { verifyWebhook } from "./verification/webhook-verification"

// You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

export async function POST(req: Request) {
  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    )
  }
}
