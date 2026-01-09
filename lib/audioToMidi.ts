const uint8 = writer.buildFile()

const arrayBuffer = new ArrayBuffer(uint8.byteLength)
new Uint8Array(arrayBuffer).set(uint8)

return new Blob(
  [arrayBuffer],
  { type: "audio/midi" }
)