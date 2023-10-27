import { FC, useContext } from 'react'
import { format, isSameDay } from 'date-fns'
import { CalendarContext } from '../contexts/CalendarContext'
import { CalendarContextType } from '../types'
import clsx from 'clsx'
import { calendarItemStyles } from '../constants'

interface ICalendarNumber extends React.ComponentPropsWithoutRef<'div'> {
  date: Date
  isOffsetDay: boolean
}

const CalendarNumber: FC<ICalendarNumber> = ({
  date,
  isOffsetDay,
  ...props
}) => {
  const { selectedDate } = useContext(CalendarContext) as CalendarContextType

  const isSelectedDate = isSameDay(selectedDate, date)
  const isCurrentDay = isSameDay(new Date(), date)

  const day = format(date, 'dd')

  return (
    <div
      className={clsx(
        isSelectedDate && !isCurrentDay && calendarItemStyles.selectedDate,
        isCurrentDay && calendarItemStyles.unselectedCurrentDate,
        isSelectedDate &&
          isCurrentDay &&
          calendarItemStyles.selectedCurrentDate,
        isOffsetDay && calendarItemStyles.offsetDay,
        'flex h-8 w-8 cursor-pointer select-none items-center justify-center rounded-full'
      )}
      {...props}
    >
      {day}
    </div>
  )
}

export default CalendarNumber
