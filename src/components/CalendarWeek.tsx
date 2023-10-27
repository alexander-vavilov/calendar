import { FC, useContext } from 'react'
import { CalendarContext } from '../contexts/CalendarContext'
import { CalendarContextType, ModalContextType } from '../types'
import { eachHourOfInterval, endOfDay, isSameHour, startOfDay } from 'date-fns'
import Tasks from './Tasks/Tasks'
import Droppable from './Droppable'
import { getDaysOfWeek, getHoursOfDay } from '../utils/calendar'
import Cell from './Cell'
import CalendarHeader from './CalendarHeader'
import TaskFormModalContent from './TaskFormModalContent'
import { ModalContext } from '../contexts/ModalContext'

interface ICalendarWeek {
  date?: Date
}

const CalendarWeek: FC<ICalendarWeek> = () => {
  const { selectedDate, tasks } = useContext(
    CalendarContext
  ) as CalendarContextType

  const daysOfSelectedWeek = getDaysOfWeek(selectedDate)

  const { openModal, closeModal } = useContext(ModalContext) as ModalContextType

  const handleAddTask = (date: Date) => {
    openModal(
      <TaskFormModalContent onClose={closeModal} taskDate={date} />,
      'Add task'
    )
  }

  return (
    <div className='flex h-full flex-col'>
      <CalendarHeader
        className='calendar-header pl-20 pr-4'
        date={selectedDate}
      />
      <div className='flex flex-auto overflow-auto'>
        <aside className='px-4'>
          {getHoursOfDay().map((hourDateValue) => {
            const hour = hourDateValue.toLocaleString('default', {
              hour: '2-digit'
            })

            return (
              <div
                key={hour}
                className='flex h-32 flex-auto items-center justify-center whitespace-nowrap'
              >
                <span className='font-medium text-gray-500'>{hour}</span>
              </div>
            )
          })}
        </aside>
        <div className='flex h-full w-full'>
          {daysOfSelectedWeek.map((dateValue) => {
            const date = new Date(dateValue)
            const day = date.getDate()
            const dayStart = startOfDay(date)
            const dayEnd = endOfDay(date)
            const dayHours = eachHourOfInterval({
              start: dayStart,
              end: dayEnd
            })

            return (
              <div key={day} className='flex-none basis-1/7'>
                {dayHours.map((hourDateValue) => {
                  const date = new Date(hourDateValue)
                  const dateString = date.toLocaleString()
                  const hourTasks = tasks.filter((task) =>
                    isSameHour(task.date, hourDateValue)
                  )

                  return (
                    <Droppable key={dateString} id={dateString} data={{ date }}>
                      <Cell
                        onClick={() => handleAddTask(date)}
                        className='h-32 flex-auto border-b-2 border-l-2 border-gray-200/70 p-1'
                      >
                        <Tasks items={hourTasks} variant='large' />
                      </Cell>
                    </Droppable>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CalendarWeek
