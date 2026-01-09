export default function PricingPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: 40,
        backgroundColor: "#0f172a", // 濃いネイビー
        color: "#e5e7eb", // 明るい文字色
      }}
    >
      <h1 style={{ fontSize: 36, marginBottom: 24 }}>Pricing</h1>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 24 }}>Free</h2>
        <p>1日5回まで解析可能</p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 24 }}>Hobby</h2>
        <p>¥199 / 月（回数無制限）</p>
        <a
          href="https://buy.stripe.com/test_dRm9AUb6f0VI28U9hW0Fi01"
  target="_blank"
  rel="noopener noreferrer"
          style={{ color: "#38bdf8", textDecoration: "underline" }}
        >
          Subscribe
        </a>
      </section>

      <section>
        <h2 style={{ fontSize: 24 }}>Creator</h2>
        <p>¥999 / 月（拡張機能すべて）</p>
        <a
          href="https://buy.stripe.com/test_6oUfZib6f1ZMdRC8dS0Fi02"
  target="_blank"
  rel="noopener noreferrer"
          style={{ color: "#38bdf8", textDecoration: "underline" }}
        >
          Subscribe
        </a>
      </section>
    </main>
  )
}
