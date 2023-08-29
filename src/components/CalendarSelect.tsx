import clsx from 'clsx'
import { FC, useEffect, useState } from 'react'
import CalendarSmall from './CalendarSmall/CalendarSmall'
import useClickAway from '../hooks/useClickAway'
import SelectButton from './SelectButton'

interface ICalendarSelect {
	defaultDate: Date
	onChange: (newDate: Date) => void
}

const CalendarSelect: FC<ICalendarSelect> = ({ defaultDate, onChange }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedDate, setSelectedDate] = useState(defaultDate)

	const selectedDateString = selectedDate.toLocaleString('default', {
		day: '2-digit',
		month: 'short',
	})

	const ref = useClickAway(() => setIsOpen(false))

	useEffect(() => {
		setIsOpen(false)
		onChange && onChange(selectedDate)
	}, [selectedDate])

	return (
		<div ref={ref}>
			<SelectButton
				label={selectedDateString}
				onClick={() => setIsOpen(prevState => !prevState)}
			/>
			<div
				className={clsx(
					!isOpen && 'invisible opacity-0 scale-75',
					'absolute top-full p-4 bg-white border border-gray-300/50 rounded-lg shadow-xl transition-all duration-300 z-10'
				)}
			>
				<CalendarSmall
					selectedDate={selectedDate}
					setSelectedDate={setSelectedDate}
				/>
			</div>
		</div>
	)
}

export default CalendarSelect
