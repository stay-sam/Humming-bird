import MidiWriter from "midi-writer-js"

export async function audioBlobToMidi(blob: Blob): Promise<Blob> {
  // 仮のメロディ（Cメジャー）
  const track = new MidiWriter.Track()
  track.addEvent(
    new MidiWriter.NoteEvent({
      pitch: ["C4", "E4", "G4"],
      duration: "4",
    })
  )

  const writer = new MidiWriter.Writer(track)

  // Uint8Array を ArrayBuffer に変換
  const uint8 = writer.buildFile()
  const arrayBuffer = new ArrayBuffer(uint8.length)
  new Uint8Array(arrayBuffer).set(uint8)

  return new Blob([arrayBuffer], { type: "audio/midi" })
}

