export const dynamic = "force-dynamic"
export const runtime = "nodejs"

import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function GET() {
  return new Response(
    JSON.stringify({ ok: true }),
    { status: 200 }
  )
}
