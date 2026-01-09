const KEY = "daily-analysis-count"

function todayKey() {
  return new Date().toISOString().slice(0, 10) // YYYY-MM-DD
}

export function canAnalyze(): boolean {
  const data = JSON.parse(localStorage.getItem(KEY) || "{}")
  const today = todayKey()

  if (data.date !== today) {
    localStorage.setItem(KEY, JSON.stringify({ date: today, count: 0 }))
    return true
  }

  return data.count < 5
}

export function incrementAnalysis() {
  const data = JSON.parse(localStorage.getItem(KEY) || "{}")
  const today = todayKey()

  if (data.date !== today) {
    localStorage.setItem(KEY, JSON.stringify({ date: today, count: 1 }))
  } else {
    data.count++
    localStorage.setItem(KEY, JSON.stringify(data))
  }
}
