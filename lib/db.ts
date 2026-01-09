import Dexie, { Table } from "dexie"

export interface Recording {
  id?: number
  createdAt: number
  audio: Blob
}

class AppDatabase extends Dexie {
  recordings!: Table<Recording>

  constructor() {
    super("hummingBirdDB")
    this.version(1).stores({
      recordings: "++id, createdAt",
    })
  }
}

export const db = new AppDatabase()
