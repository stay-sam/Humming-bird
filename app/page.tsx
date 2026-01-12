export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Humming Bird</h1>

      <a href="/login">
        <button
          style={{
            padding: "12px 20px",
            fontSize: 16,
            marginTop: 20,
          }}
        >
          ログイン
        </button>
      </a>

      <a href="/api/stripe/checkout">
        <button
          style={{
            padding: "12px 20px",
            fontSize: 16,
            marginTop: 20,
            display: "block",
          }}
        >
          購入する
        </button>
      </a>
    </main>
  )
}
