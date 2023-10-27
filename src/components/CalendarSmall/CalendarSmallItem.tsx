import { FC, useContext } from 'react'
import Cell from '../Cell'
import clsx from 'clsx'
import { ModalContextType, taskType } from '../../types'
import Tasks from '../Tasks/Tasks'
import { isSameDay } from 'date-fns'
import TaskFormModalContent from '../TaskFormModalContent'
import { ModalContext } from '../../contexts/ModalContext'

interface ICalendarSmallItem {
  handleClick: () => void
  dayTasks: taskType[]
  selectedDate: Date
  dateValue: Date
  isOffsetDay: boolean
}

const CalendarSmallItem: FC<ICalendarSmallItem> = ({
  handleClick,
  dayTasks,
  dateValue,
  selectedDate,
  isOffsetDay
}) => {
  const currentDate = new Date()
  const date = new Date(dateValue)
  const day = new Date(dateValue).toLocaleString('default', {
    day: '2-digit'
  })

  const isSelectedDate = isSameDay(selectedDate, date)
  const isCurrentDay = isSameDay(currentDate, dateValue)

  const { openModal, closeModal } = useContext(ModalContext) as ModalContextType

  const handleAddTask = (date: Date) => {
    openModal(
      <TaskFormModalContent onClose={closeModal} taskDate={date} />,
      'Add task'
    )
  }

  return (
    <Cell
      onDoubleClick={() => handleAddTask(date)}
      className='relative flex h-full w-full cursor-pointer select-none items-center justify-center'
    >
      <div
        onClick={handleClick}
        className={clsx(
          isSelectedDate && 'bg-gray-400/80 font-bold text-white',
          isCurrentDay && !isSelectedDate && 'text-blue-500',
          isSelectedDate &&
            isCurrentDay &&
            'rounded-full !bg-blue-500 text-white',
          isOffsetDay && 'text-gray-300',
          'flex h-8 w-8 cursor-pointer items-center justify-center rounded-full'
        )}
      >
        {day}
      </div>
      {dayTasks.length > 0 && (
        <div
          className={clsx(
            'pointer-events-none absolute transition-all',
            isSelectedDate ? '-bottom-1.5' : 'bottom-0.5'
          )}
        >
          <Tasks items={dayTasks} variant='small' />
        </div>
      )}
    </Cell>
  )
}

export default CalendarSmallItem
