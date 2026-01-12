import Stripe from "stripe"
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: Request) {
  const { customerId } = await req.json()

  const subs = await stripe.subscriptions.list({
    customer: customerId,
    limit: 1,
  })

  if (subs.data.length > 0) {
    await stripe.subscriptions.del(subs.data[0].id)
  }

  return Response.json({ ok: true })
}
