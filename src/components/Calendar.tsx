import { FC, useContext } from 'react'
import { CalendarContext } from '../contexts/CalendarContext'
import { CalendarContextType } from '../types'
import CalendarMonth from './CalendarMonth'
import CalendarWeek from './CalendarWeek'

const Calendar: FC = () => {
	const { displayMode } = useContext(CalendarContext) as CalendarContextType

	return displayMode === 'month' ? <CalendarMonth /> : <CalendarWeek />
}

export default Calendar
