import { FC, useState } from 'react'
import Cell from '../Cell'
import CalendarSmallHeader from './CalendarSmallHeader'
import WeekDays from '../WeekDays'
import CalendarSmallItems from './CalendarSmallItems'
import { getDays, getPrefixDaysCount } from '../../utils'

interface ICalendarSmall {
	selectedDate: Date
	setSelectedDate: React.Dispatch<React.SetStateAction<Date>>
}

const CalendarSmall: FC<ICalendarSmall> = ({
	selectedDate,
	setSelectedDate,
}) => {
	const [calendarSelectedDate, setCalendarSelectedDate] = useState(selectedDate)

	const days = getDays(calendarSelectedDate, 'month')
	const prefixDaysCount = getPrefixDaysCount(calendarSelectedDate)

	return (
		<div>
			<CalendarSmallHeader
				date={calendarSelectedDate}
				setDate={setCalendarSelectedDate}
			/>
			<div className='grid grid-cols-7 gap-2 pl-4'>
				<WeekDays />
				{Array.from({ length: prefixDaysCount }).map((_, index) => (
					<Cell key={index} />
				))}
				<CalendarSmallItems
					days={days}
					selectedDate={selectedDate}
					setSelectedDate={setSelectedDate}
				/>
			</div>
		</div>
	)
}

export default CalendarSmall
