import { Dispatch, FC, SetStateAction, useContext } from 'react'
import Cell from '../Cell'
import clsx from 'clsx'
import { ModalContextType, taskType } from '../../types'
import Tasks from '../Tasks/Tasks'
import { isSameDay } from 'date-fns'
import TaskFormModalContent from '../TaskFormModalContent'
import { ModalContext } from '../../contexts/ModalContext'
import CalendarNumber from '../CalendarNumber'

interface ICalendarSmallItem {
  dayTasks: taskType[]
  selectedDate: Date
  setSelectedDate: Dispatch<SetStateAction<Date>>
  date: Date
  isOffsetDay: boolean
}

const CalendarSmallItem: FC<ICalendarSmallItem> = ({
  selectedDate,
  setSelectedDate,
  dayTasks,
  date,
  isOffsetDay
}) => {
  const isSelectedDate = isSameDay(selectedDate, date)
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
      className='relative flex h-full w-full cursor-pointer items-center justify-center'
    >
      <CalendarNumber
        date={date}
        isOffsetDay={isOffsetDay}
        onClick={() => setSelectedDate(date)}
        onDoubleClick={() => handleAddTask(date)}
      />
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
