export const runtime = "nodejs"
export const dynamic = "force-dynamic"

import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-15.clover",
})

export async function GET() {
  return new Response(
    JSON.stringify({ ok: true }),
    { status: 200 }
  )
}
