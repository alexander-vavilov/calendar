import { isSameDay } from 'date-fns'
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
	setSelectedDate,
}) => {
	const currentDate = new Date()
	const { tasks } = useContext(CalendarContext) as CalendarContextType

	return days.map(dateValue => {
		const date = new Date(dateValue)
		const day = date.toLocaleString('default', {
			day: '2-digit',
		})
		const dayTasks = tasks.filter(task => isSameDay(task.date, date))

		const isSelectedDate = isSameDay(selectedDate, date)
		const isCurrentDay = isSameDay(currentDate, dateValue)

		return (
			<CalendarSmallItem
				handleClick={() => setSelectedDate(date)}
				isSelectedDate={isSelectedDate}
				isCurrentDay={isCurrentDay}
				label={day}
				dayTasks={dayTasks}
			/>
		)
	})
}

export default CalendarSmallItems
