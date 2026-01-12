"use client"

import { supabase } from "@/lib/supabase"
import { useState } from "react"

export default function LoginPage() {
  const [email, setEmail] = useState("")

  const login = async () => {
    await supabase.auth.signInWithOtp({ email })
    alert("メールを確認してください")
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>ログイン</h1>
      <input
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={login}>ログイン</button>
    </main>
  )
}
