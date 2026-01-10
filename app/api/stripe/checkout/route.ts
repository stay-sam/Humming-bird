import Stripe from "stripe"
import { NextResponse } from "next/server"

export const runtime = "nodejs"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
})

// ★ 確認用（GET）
export async function GET() {
  return NextResponse.json({ ok: true })
}

// ★ 本番用（POST）
export async function POST() {
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "jpy",
          product_data: {
            name: "Humming Bird プランA",
          },
          unit_amount: 199,
        },
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/pricing`,
  })

  return NextResponse.json({ url: session.url })
}
