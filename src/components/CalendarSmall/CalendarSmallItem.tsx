import { FC } from 'react'
import Cell from '../Cell'
import clsx from 'clsx'
import { taskType } from '../../types'
import Tasks from '../Tasks/Tasks'

interface ICalendarSmallItem {
	handleClick: () => void
	isSelectedDate: boolean
	isCurrentDay: boolean
	label: string
	dayTasks: taskType[]
}

const CalendarSmallItem: FC<ICalendarSmallItem> = ({
	handleClick,
	isSelectedDate,
	isCurrentDay,
	label,
	dayTasks,
}) => {
	return (
		<Cell className='relative flex justify-center items-center w-full h-full cursor-pointer'>
			<div
				onClick={handleClick}
				className={clsx(
					isSelectedDate && 'bg-gray-400/80 text-white font-bold rounded-full',
					isCurrentDay && !isSelectedDate && 'text-blue-500',
					isSelectedDate &&
						isCurrentDay &&
						'!bg-blue-500 text-white rounded-full',
					'flex justify-center items-center w-8 h-8 cursor-pointer'
				)}
			>
				{label}
			</div>
			<div className='absolute bottom-1'>
				<Tasks items={dayTasks} variant='small' />
			</div>
		</Cell>
	)
}

export default CalendarSmallItem
