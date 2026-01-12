"use client"

import { useEffect, useState } from "react"

export default function LibraryPage() {
  const [loading, setLoading] = useState(true)
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    fetch("/api/me")
      .then((res) => res.json())
      .then((data) => {
        setSubscribed(data.subscribed)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <p>確認中...</p>
  }

  if (!subscribed) {
    return (
      <main style={{ padding: 40 }}>
        <h1>このページは購入者限定です</h1>
        <a href="/">トップに戻る</a>
      </main>
    )
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>📚 有料コンテンツ</h1>
      <p>ここに有料コンテンツを表示します。</p>
    </main>
  )
}
