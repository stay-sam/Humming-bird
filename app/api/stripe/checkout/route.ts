import Stripe from "stripe"
import { NextResponse } from "next/server"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
})

export async function GET() {
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "jpy",
          product_data: {
            name: "テスト商品",
          },
          unit_amount: 1000,
        },
        quantity: 1,
      },
    ],
    success_url: "https://humming-bird-cyan.vercel.app/success",
    cancel_url: "https://humming-bird-cyan.vercel.app/cancel",
  })

  return NextResponse.redirect(session.url!, 303)
}
