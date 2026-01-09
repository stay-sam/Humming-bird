import { NextRequest } from "next/server"
import Stripe from "stripe"
import { createClient } from "@supabase/supabase-js"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
})

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get("stripe-signature")!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error("Webhook error:", err)
    return new Response("Webhook Error", { status: 400 })
  }

  // 支払い成功
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session

    const email = session.customer_email
    const customerId = session.customer as string
    const priceId = session.metadata?.plan

    if (!email || !priceId) return new Response("Missing data", { status: 400 })

    // ユーザー取得 or 作成
    const { data: user } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single()

    let userId = user?.id

    if (!userId) {
      const { data: newUser } = await supabase
        .from("users")
        .insert({ email })
        .select()
        .single()
      userId = newUser!.id
    }

    // subscription 登録
    await supabase.from("subscriptions").insert({
      user_id: userId,
      plan: priceId, // hobby or creator
      stripe_customer_id: customerId,
      status: "active",
    })
  }

  return new Response("ok", { status: 200 })
}
