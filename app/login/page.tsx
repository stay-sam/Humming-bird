"use client"

import { useState } from "react"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function LoginPage() {
  const [email, setEmail] = useState("")

  const login = async () => {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo:
          "https://humming-bird-cyan.vercel.app/library",
      },
    })

    if (error) {
      alert(error.message)
    } else {
      alert("メールを確認してください")
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>ログイン</h1>

      <input
        type="email"
        placeholder="email@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: 8, marginRight: 8 }}
      />

      <button onClick={login}>ログイン</button>
    </div>
  )
}
