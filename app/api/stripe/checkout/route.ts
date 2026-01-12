export const runtime = "nodejs"
export const dynamic = "force-dynamic"

import Stripe from "stripe"

export async function POST(req: Request) {
  // ★ Stripeはここで初期化（重要）
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [
      {
        price: process.env.STRIPE_PRICE_ID!,
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/library`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
  })

  return Response.json({ url: session.url })
}
