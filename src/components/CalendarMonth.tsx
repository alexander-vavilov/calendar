import { FC, useContext } from 'react'
import { CalendarContext } from '../contexts/CalendarContext'
import { CalendarContextType } from '../types'
import { isSameDay } from 'date-fns'
import { getDays, getPrefixDaysCount } from '../utils'
import Cell from './Cell'
import WeekDays from './WeekDays'
import Tasks from './Tasks/Tasks'

const CalendarMonth: FC = () => {
	const { selectedDate, tasks } = useContext(
		CalendarContext
	) as CalendarContextType

	const days = getDays(selectedDate, 'month')
	const prefixDaysCount = getPrefixDaysCount(selectedDate)

	return (
		<div className='flex flex-col h-full'>
			<div className='flex justify-between py-4 border-b-2 border-gray-300/40'>
				<WeekDays />
			</div>
			<div className='flex flex-auto h-full'>
				<div className='flex-auto grid grid-cols-7 max-h-fit rounded-lg'>
					{Array.from({ length: prefixDaysCount }).map((_, index) => (
						<Cell
							key={index}
							className='border-r-2 border-b-2 border-slate-300/40'
						/>
					))}
					{days.map(dateValue => {
						const date = new Date(dateValue)
						const day = date.toLocaleString('default', {
							day: '2-digit',
						})
						const dayTasks = tasks.filter(task => isSameDay(task.date, date))

						return (
							<Cell
								key={day}
								className='p-1 text-black/60 border-r-2 border-b-2 border-slate-300/40'
							>
								<span className='p-2'>{day}</span>
								<Tasks items={dayTasks} variant='base' />
							</Cell>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default CalendarMonth
