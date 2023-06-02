import { NewDiaryEntry } from '../types'
import { Weather, Visibility } from '../enums'

const isString = (param: any): boolean => {
  return typeof param === 'string'
}

const isDate = (param: any): boolean => {
  return Boolean(Date.parse(param))
}

const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

const parseDate = (dateFromReq: any): string => {
  if (!isString(dateFromReq) || !isDate(dateFromReq)) {
    throw new Error('Invalid or missing date')
  }
  return dateFromReq
}

const parseWeather = (weatherFromReq: any): Weather => {
  if (!isString(weatherFromReq) || !isWeather(weatherFromReq)) {
    throw new Error('Invalid or missing weather')
  }
  return weatherFromReq
}

const parseVisibility = (visibilityFromReq: any): Visibility => {
  if (!isString(visibilityFromReq) || !isVisibility(visibilityFromReq)) {
    throw new Error('Invalid or missing weather')
  }
  return visibilityFromReq
}

const parseComment = (commentFormReq: any): string => {
  if (!isString(commentFormReq)) {
    throw new Error('Invalid or missing comment')
  }
  return commentFormReq
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility),
    comment: parseComment(object.comment)
  }
  return newEntry
}

export default toNewDiaryEntry
