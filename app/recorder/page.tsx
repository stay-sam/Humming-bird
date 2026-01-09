"use client"

import { useRef, useState } from "react"
import { audioBlobToMidi } from "@/lib/audioToMidi"
import { canAnalyze, incrementAnalysis } from "@/lib/usage"

export default function RecorderPage() {
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<Blob[]>([])
  const [recording, setRecording] = useState(false)

  async function startRecording() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    const mediaRecorder = new MediaRecorder(stream)

    mediaRecorderRef.current = mediaRecorder
    chunksRef.current = []

    mediaRecorder.ondataavailable = (e) => {
      chunksRef.current.push(e.data)
    }

    mediaRecorder.onstop = async () => {
      const blob = new Blob(chunksRef.current, { type: "audio/webm" })

      if (!canAnalyze()) {
        alert("Free plan limit: 5 analyses per day")
        return
      }

      const midiBlob = await audioBlobToMidi(blob)
      incrementAnalysis()

      const url = URL.createObjectURL(midiBlob)
      const a = document.createElement("a")
      a.href = url
      a.download = "humming-bird.mid"
      a.click()

      alert("Saved 🎶")
    }

    mediaRecorder.start()
    setRecording(true)
  }

  function stopRecording() {
    mediaRecorderRef.current?.stop()
    setRecording(false)
  }

  return (
    <main style={{ padding: 40, color: "white" }}>
      <h1>🎤 Recorder</h1>

      {!recording ? (
        <button onClick={startRecording}>Start Recording</button>
      ) : (
        <button onClick={stopRecording}>Stop Recording</button>
      )}
    </main>
  )
}
