import { FC } from 'react'
import { daysOfWeek } from '../consts'
import Cell from './Cell'

const WeekDays: FC = () => {
	return daysOfWeek.map(day => (
		<Cell
			key={day}
			className='flex flex-auto justify-center items-center text-black/60 capitalize'
		>
			{day}
		</Cell>
	))
}

export default WeekDays
