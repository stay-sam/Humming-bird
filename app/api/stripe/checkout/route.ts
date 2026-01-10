export const dynamic = "force-dynamic"
export const runtime = "nodejs"

import Stripe from "stripe"

export async function GET() {
  return new Response(
    JSON.stringify({ ok: true }),
    { status: 200 }
  )
}

export async function POST() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "jpy",
          product_data: { name: "Test Product" },
          unit_amount: 500,
        },
        quantity: 1,
      },
    ],
    success_url: "https://example.com/success",
    cancel_url: "https://example.com/cancel",
  })

  return new Response(
    JSON.stringify({ url: session.url }),
    { status: 200 }
  )
}
