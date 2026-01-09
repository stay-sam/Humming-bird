import Pitchfinder from "pitchfinder"
import MidiWriter from "midi-writer-js"

export async function audioBlobToMidi(blob: Blob): Promise<Blob> {
  const audioCtx = new AudioContext()
  const buffer = await audioCtx.decodeAudioData(await blob.arrayBuffer())
  const data = buffer.getChannelData(0)

  const detectPitch = Pitchfinder.YIN({ sampleRate: audioCtx.sampleRate })

  const track = new MidiWriter.Track()
  track.addEvent(new MidiWriter.ProgramChangeEvent({ instrument: 1 }))

  const step = 2048
  let lastNote: number | null = null

  for (let i = 0; i < data.length; i += step) {
    const slice = data.slice(i, i + step)
    const freq = detectPitch(slice)

    if (!freq) continue

    const midiNote = Math.round(69 + 12 * Math.log2(freq / 440))

    if (midiNote !== lastNote) {
      track.addEvent(
        new MidiWriter.NoteEvent({
          pitch: [midiNote],
          duration: "8",
        })
      )
      lastNote = midiNote
    }
  }

  const writer = new MidiWriter.Writer([track])
  const uint8 = writer.buildFile()

  return new Blob([uint8], { type: "audio/midi" })
}
