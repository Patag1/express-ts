import { DiaryEntry, NonSensitiveInfoDiaryEntry, NewDiaryEntry } from '../types'
import diaryData from './diaries.json' // simulates data fetching
// import diaryData from './diaries' -> another way
// ./diaries imports the .ts file because of typescript's file predilection:
// .tsx -> .ts -> .node -> .js -> .json

// const diaries: Array<DiaryEntry> = diaryData -> in case we use the ./diaries.ts import
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)
  if (entry != null) {
    const { comment, ...restOfData } = entry
    return restOfData
  }
  return undefined
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => (
    {
      id,
      date,
      weather,
      visibility
    }
  ))
}

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiaryEntry
  }
  diaries.push(newDiary)
  return newDiary
}
