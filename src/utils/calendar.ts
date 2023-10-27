import {
  add,
  eachDayOfInterval,
  eachHourOfInterval,
  endOfDay,
  endOfMonth,
  endOfWeek,
  getDay,
  startOfDay,
  startOfMonth,
  startOfWeek,
  sub
} from 'date-fns'

export const getDays = (date: Date, interval: 'week' | 'month') => {
  let start
  let end

  switch (interval) {
    case 'week':
      start = startOfWeek(date)
      end = endOfWeek(date)
      break
    case 'month':
      start = startOfMonth(date)
      end = endOfMonth(date)
  }

  return eachDayOfInterval({ start, end })
}

export const getPrefixDaysCount = (date: Date) => {
  const startDate = startOfMonth(date)
  const weekDay = getDay(startDate) - 1

  return weekDay >= 0 ? weekDay : 6
}
export const getPostfixDaysCount = (date: Date) => {
  const endDate = endOfMonth(date)
  const weekDay = getDay(endDate) - 1

  return 6 - weekDay
}
export const getPrefixDays = (date: Date) => {
  const prevMonthDays = getDays(sub(date, { months: 1 }), 'month')
  return prevMonthDays.slice(prevMonthDays.length - getPrefixDaysCount(date))
}
export const getPostfixDays = (date: Date) => {
  const nextMonthDays = getDays(add(date, { months: 1 }), 'month')
  return nextMonthDays.slice(0, getPostfixDaysCount(date))
}

export const getHoursOfDay = () => {
  const dayStart = startOfDay(new Date())
  const dayEnd = endOfDay(new Date())

  return eachHourOfInterval({ start: dayStart, end: dayEnd })
}

export const getDaysOfWeek = (date: Date = new Date()) => {
  const startOfSelectedWeek = startOfWeek(date, { weekStartsOn: 1 })
  const endOfSelectedWeek = endOfWeek(date, { weekStartsOn: 1 })

  return eachDayOfInterval({
    start: startOfSelectedWeek,
    end: endOfSelectedWeek
  })
}
