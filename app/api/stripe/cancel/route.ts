export const runtime = "nodejs"
export const dynamic = "force-dynamic"

import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST() {
  const customerId = "REPLACE_WITH_CUSTOMER_ID"

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
