export const metadata = {
  title: "Humming-bird",
  description: "Hum to MIDI App",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body
        style={{
          margin: 0,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          backgroundColor: "#020617",
        }}
      >
        {children}
      </body>
    </html>
  )
}

