"use client"

export default function Home() {
  const handleCheckout = async () => {
    const res = await fetch("/api/stripe/checkout", {
      method: "POST",
    })

    const data = await res.json()
    window.location.href = data.url
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>Humming Bird</h1>

      <button
        onClick={handleCheckout}
        style={{
          marginTop: 20,
          padding: "12px 24px",
          fontSize: 16,
          cursor: "pointer",
        }}
      >
        購入する（¥500）
      </button>
    </main>
  )
}
