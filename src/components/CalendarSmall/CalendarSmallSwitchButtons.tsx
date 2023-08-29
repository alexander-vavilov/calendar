import { addMonths, subMonths } from 'date-fns'
import { FC } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { ICalendarSmallHeaderProps } from '../../types'

const CalendarSmallSwitchButtons: FC<ICalendarSmallHeaderProps> = ({
	date,
	setDate,
}) => {
	const currentDate = new Date()

	const switchMonth = (direction: 'prev' | 'next') => {
		let monthDate = currentDate
		switch (direction) {
			case 'prev':
				monthDate = subMonths(date, 1)
				break
			case 'next':
				monthDate = addMonths(date, 1)
				break
			default:
				console.log('Invalid parameter')
		}

		setDate(monthDate)
	}

	return (
		<div className='flex gap-4'>
			<button onClick={() => switchMonth('prev')}>
				<IoIosArrowBack />
			</button>
			<button onClick={() => switchMonth('next')}>
				<IoIosArrowForward />
			</button>
		</div>
	)
}

export default CalendarSmallSwitchButtons
