import { FC, useState } from 'react'
import CalendarSmallHeading from './CalendarSmallHeading'
import CalendarSmallItems from './CalendarSmallItems'
import { getDays, getPostfixDays, getPrefixDays } from '../../utils/calendar'
import CalendarHeader from '../CalendarHeader'

interface ICalendarSmall {
  selectedDate: Date
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>
}

const CalendarSmall: FC<ICalendarSmall> = ({
  selectedDate,
  setSelectedDate
}) => {
  const [calendarSelectedDate, setCalendarSelectedDate] = useState(selectedDate)

  const monthDays = getDays(calendarSelectedDate, 'month')
  const prefixDays = getPrefixDays(calendarSelectedDate)
  const postfixDays = getPostfixDays(calendarSelectedDate)

  return (
    <div>
      <CalendarSmallHeading
        date={calendarSelectedDate}
        setDate={setCalendarSelectedDate}
      />
      <div className='pl-4'>
        <CalendarHeader
          display={{ day: false, dayAbbreviation: true }}
          className='text-sm'
        />
        <div className='grid grid-cols-7 gap-2'>
          <CalendarSmallItems
            days={[...prefixDays, ...monthDays, ...postfixDays]}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
      </div>
    </div>
  )
}

export default CalendarSmall
