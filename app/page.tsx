"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const handleCheckout = async () => {
    const res = await fetch("/api/stripe/checkout", {
      method: "POST",
    })

   const session = await supabase.auth.getSession()
if (!session.data.session) {
  window.location.href = "/login"
  return
}


  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #020617)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <h1 style={{ fontSize: 48, marginBottom: 40 }}>
        Humming Bird
      </h1>

      <button
        onClick={handleCheckout}
        style={{
          padding: "16px 40px",
          fontSize: 20,
          fontWeight: "bold",
          borderRadius: 12,
          border: "none",
          background: "#22c55e",
          color: "#022c22",
          cursor: "pointer",
          boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
        }}
      >
        購入する（¥500）
      </button>
    </main>
  )
}
