import { FC, useContext } from 'react'
import { CalendarContext } from '../contexts/CalendarContext'
import { CalendarContextType, ModalContextType } from '../types'
import { isSameDay, isSameMonth } from 'date-fns'
import { getDays, getPostfixDays, getPrefixDays } from '../utils/calendar'
import Cell from './Cell'
import Tasks from './Tasks/Tasks'
import Droppable from './Droppable'
import CalendarHeader from './CalendarHeader'
import clsx from 'clsx'
import { ModalContext } from '../contexts/ModalContext'
import TaskFormModalContent from './TaskFormModalContent'

const CalendarMonth: FC = () => {
  const { selectedDate, tasks } = useContext(
    CalendarContext
  ) as CalendarContextType

  const { openModal, closeModal } = useContext(ModalContext) as ModalContextType

  const handleAddTask = (date: Date) => {
    openModal(
      <TaskFormModalContent onClose={closeModal} taskDate={date} />,
      'Add task'
    )
  }

  const monthDays = getDays(selectedDate, 'month')
  const prefixDays = getPrefixDays(selectedDate)
  const postfixDays = getPostfixDays(selectedDate)

  const days = [...prefixDays, ...monthDays, ...postfixDays]

  return (
    <div className='flex h-full flex-col'>
      <CalendarHeader
        display={{ day: false, dayAbbreviation: true }}
        className='calendar-header'
      />
      <div className='flex-auto'>
        <div className='grid h-full grid-cols-7'>
          {days.map((dateValue) => {
            const date = new Date(dateValue)
            const day = date.toLocaleString('default', {
              day: '2-digit'
            })
            const dayTasks = tasks.filter((task) => isSameDay(task.date, date))

            const middleMonthDay = days[Math.round(days.length / 2)]
            const isOffsetDay = !isSameMonth(middleMonthDay, date)

            return (
              <Droppable
                key={dateValue.toISOString()}
                id={dateValue.toISOString()}
                data={{ date }}
                className={clsx(
                  'border-b-2 border-r-2 border-gray-200/70 text-gray-500 transition-colors duration-300 active:bg-gray-100',
                  isOffsetDay && 'bg-gray-100'
                )}
              >
                <Cell
                  onClick={() => handleAddTask(date)}
                  className={clsx(
                    'relative h-full p-1',
                    isOffsetDay && 'opacity-60'
                  )}
                >
                  <span className='inline-block select-none p-2'>{day}</span>
                  <Tasks items={dayTasks} variant='base' />
                </Cell>
              </Droppable>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CalendarMonth
