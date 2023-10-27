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
  const [calendarSelectedDate, setCalendarSelectedDate] = useState(defaultDate)

  const selectedDateString = calendarSelectedDate.toLocaleString('default', {
    day: '2-digit',
    month: 'short'
  })

  const ref = useClickAway(() => setIsOpen(false))

  useEffect(() => {
    setIsOpen(false)
    onChange && onChange(calendarSelectedDate)
  }, [calendarSelectedDate])

  return (
    <div ref={ref}>
      <SelectButton
        label={selectedDateString}
        onClick={() => setIsOpen((prevState) => !prevState)}
      />
      <div
        className={clsx(
          !isOpen && 'invisible scale-75 opacity-0',
          'absolute top-full z-10 rounded-lg border border-gray-300/50 bg-white p-4 shadow-xl transition-all duration-300'
        )}
      >
        <CalendarSmall
          selectedDate={calendarSelectedDate}
          setSelectedDate={setCalendarSelectedDate}
        />
      </div>
    </div>
  )
}

export default CalendarSelect
