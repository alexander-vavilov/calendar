import { FC } from 'react'
import CalendarSmallSwitchButtons from './CalendarSmallSwitchButtons'
import { ICalendarSmallHeadingProps } from '../../types'
import { isSameYear } from 'date-fns'

const CalendarSmallHeading: FC<ICalendarSmallHeadingProps> = ({
  date,
  setDate
}) => {
  const currentDate = new Date()
  const monthName = date.toLocaleString('default', {
    month: 'long'
  })

  return (
    <div className='flex justify-between pb-2'>
      <div className='text-xl font-medium'>
        <span>{monthName}</span>
        {!isSameYear(date, currentDate) && (
          <span className='inline-block pl-1 text-red-500'>
            {date.getFullYear()}
          </span>
        )}
      </div>
      <CalendarSmallSwitchButtons date={date} setDate={setDate} />
    </div>
  )
}

export default CalendarSmallHeading
