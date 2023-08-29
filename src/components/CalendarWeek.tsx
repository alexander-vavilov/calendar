import { FC, useContext, Fragment } from 'react'
import { CalendarContext } from '../contexts/CalendarContext'
import { CalendarContextType } from '../types'
import {
	eachDayOfInterval,
	eachHourOfInterval,
	endOfDay,
	endOfWeek,
	format,
	isSameHour,
	startOfDay,
	startOfWeek,
} from 'date-fns'
import CalendarWeekColumn from './CalendarWeekColumn'
import Task from './Tasks/Task'
import Tasks from './Tasks/Tasks'

interface ICalendarWeek {
	date?: Date
}

const CalendarWeek: FC<ICalendarWeek> = () => {
	const { selectedDate, tasks } = useContext(
		CalendarContext
	) as CalendarContextType

	const startOfSelectedWeek = startOfWeek(selectedDate)
	const endOfSelectedWeek = endOfWeek(selectedDate)
	const daysOfSelectedWeek = eachDayOfInterval({
		start: startOfSelectedWeek,
		end: endOfSelectedWeek,
	})

	return (
		<div className='h-full overflow-auto'>
			<div className='flex w-full h-full'>
				{daysOfSelectedWeek.map((dateValue, index) => {
					const date = new Date(dateValue)
					const day = date.getDate()
					const dayOfWeekAbbreviation = format(date, 'EE')
					const dayStart = startOfDay(date)
					const dayEnd = endOfDay(date)
					const dayHours = eachHourOfInterval({
						start: dayStart,
						end: dayEnd,
					})

					return (
						<Fragment key={day}>
							{index === 0 && (
								<CalendarWeekColumn title='' className='flex-none'>
									{dayHours.map(hourDateValue => {
										const hour = hourDateValue.toLocaleString('default', {
											hour: '2-digit',
										})

										return (
											<div
												key={hour}
												className='flex flex-auto justify-center items-center'
											>
												<span className='text-black/60 font-medium'>
													{hour}
												</span>
											</div>
										)
									})}
								</CalendarWeekColumn>
							)}
							<CalendarWeekColumn title={`${day} ${dayOfWeekAbbreviation}`}>
								{dayHours.map(hourDateValue => {
									const hourTasks = tasks.filter(task =>
										isSameHour(task.date, hourDateValue)
									)

									return (
										<div
											key={hourDateValue.toISOString()}
											className='flex-auto p-1 border border-gray-300'
										>
											<Tasks items={hourTasks} variant='large' />
										</div>
									)
								})}
							</CalendarWeekColumn>
						</Fragment>
					)
				})}
			</div>
		</div>
	)
}

export default CalendarWeek
