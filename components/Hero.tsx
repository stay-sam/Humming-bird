export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "radial-gradient(circle at top, #1f2937, #020617)",
        color: "white",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: 800,
          background: "linear-gradient(to right, #22d3ee, #a78bfa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "1rem",
        }}
      >
        Hum a melody.
        <br />
        Get the MIDI.
      </h1>

      <p style={{ maxWidth: 500, opacity: 0.85, marginBottom: "2rem" }}>
        Record your voice, convert it to MIDI, and start composing instantly.
      </p>

      <div style={{ display: "flex", gap: "1rem" }}>
        <button
          style={{
            padding: "0.75rem 1.5rem",
            borderRadius: 999,
            background: "white",
            color: "black",
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
          }}
        >
          Start Recording
        </button>

        <button
          style={{
            padding: "0.75rem 1.5rem",
            borderRadius: 999,
            background: "transparent",
            color: "white",
            border: "1px solid white",
            cursor: "pointer",
          }}
        >
          View Demo
        </button>
      </div>
    </section>
  )
}
