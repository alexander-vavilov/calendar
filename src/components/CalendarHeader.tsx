import { FC } from 'react'
import { getDaysOfWeek } from '../utils/calendar'
import { format } from 'date-fns'
import clsx from 'clsx'

interface ICalendarHeader {
  date?: Date
  className?: string
  display?: {
    day?: boolean
    dayAbbreviation?: boolean
  }
}

const CalendarHeader: FC<ICalendarHeader> = ({
  date,
  className,
  display = {
    day: true,
    dayAbbreviation: true
  }
}) => {
  const daysOfSelectedWeek = getDaysOfWeek(date)

  return (
    <div className={clsx('flex', className)}>
      {daysOfSelectedWeek.map((dateValue) => {
        const date = new Date(dateValue)
        const day = date.getDate()
        const dayOfWeekAbbreviation = format(date, 'EE')

        return (
          <div
            key={day}
            className='basis-1/7 text-center font-medium text-gray-500'
          >
            {display.day && day}{' '}
            {display.dayAbbreviation && dayOfWeekAbbreviation}
          </div>
        )
      })}
    </div>
  )
}

export default CalendarHeader
