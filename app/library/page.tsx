"use client"

import { useLiveQuery } from "dexie-react-hooks"
import { db } from "@/lib/db"

export default function LibraryPage() {
  const recordings = useLiveQuery(
    () => db.recordings.orderBy("createdAt").reverse().toArray(),
    []
  )

  return (
    <main style={{ padding: 40, color: "white" }}>
      <h1>📚 My Library</h1>

      {!recordings && <p>Loading...</p>}
      {recordings?.length === 0 && <p>No recordings yet.</p>}

      <ul>
        {recordings?.map((rec) => {
          const url = URL.createObjectURL(rec.audio)

          return (
            <li key={rec.id} style={{ marginBottom: 20 }}>
              <audio controls src={url} />
              <div>
                <small>
                  {new Date(rec.createdAt).toLocaleString()}
                </small>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
