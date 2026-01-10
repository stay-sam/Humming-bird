export const runtime = "nodejs"

import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-15.clover",
})

/**
 * 確認用：ブラウザで直接開くための GET
 */
export async function GET() {
  return new Response(
    JSON.stringify({
      ok: true,
      message: "Stripe checkout API is alive",
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
}

/**
 * 実際の Checkout 用（後で使う）
 */
export async function POST() {
  return new Response("POST endpoint ready", { status: 200 })
}
