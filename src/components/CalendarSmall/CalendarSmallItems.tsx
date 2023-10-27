import { isSameDay, isSameMonth } from 'date-fns'
import { FC, useContext } from 'react'
import CalendarSmallItem from './CalendarSmallItem'
import { CalendarContext } from '../../contexts/CalendarContext'
import { CalendarContextType } from '../../types'

interface ICalendarSmallItems {
  days: Date[]
  selectedDate: Date
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>
}

const CalendarSmallItems: FC<ICalendarSmallItems> = ({
  days,
  selectedDate,
  setSelectedDate
}) => {
  const { tasks } = useContext(CalendarContext) as CalendarContextType

  return days.map((dateValue) => {
    const date = new Date(dateValue)
    const dayTasks = tasks.filter((task) => isSameDay(task.date, date))

    const middleMonthDay = days[Math.round(days.length / 2)]
    const isOffsetDay = !isSameMonth(middleMonthDay, date)

    return (
      <CalendarSmallItem
        key={date.toISOString()}
        dateValue={dateValue}
        handleClick={() => setSelectedDate(date)}
        selectedDate={selectedDate}
        dayTasks={dayTasks}
        isOffsetDay={isOffsetDay}
      />
    )
  })
}

export default CalendarSmallItems
