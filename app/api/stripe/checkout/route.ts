export const runtime = "nodejs"

import { NextResponse } from "next/server"

/**
 * 確認用 GET
 * ブラウザで直接開いたときに表示される
 */
export async function GET() {
  return NextResponse.json({
    ok: true,
    message: "Stripe checkout API is alive",
  })
}

/**
 * 本番用 POST（今は未使用）
 */
export async function POST() {
  return NextResponse.json({
    ok: true,
    message: "POST endpoint placeholder",
  })
}
