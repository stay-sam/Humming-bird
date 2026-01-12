export const runtime = "nodejs"
export const dynamic = "force-dynamic"

import Stripe from "stripe"

export async function POST(req: Request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

  const { customerId } = await req.json()

  if (!customerId) {
    return Response.json(
      { error: "customerId is required" },
      { status: 400 }
    )
  }

  const subs = await stripe.subscriptions.list({
    customer: customerId,
    status: "active",
    limit: 1,
  })

  if (subs.data.length > 0) {
    await stripe.subscriptions.cancel(subs.data[0].id)
  }

  return Response.json({ ok: true })
}
