import { FC, useState, useContext } from 'react'
import { CalendarContext } from '../contexts/CalendarContext'
import { CalendarContextType, ISelectOption, hexColorType } from '../types'
import Modal from './Modal'
import { addHours, eachMinuteOfInterval, endOfDay, startOfDay } from 'date-fns'
import Select from './Select'
import CalendarSelect from './CalendarSelect'
import Input from './Input'
import { nanoid } from 'nanoid'
import { taskColors } from '../constants'

const TaskFormModal: FC<{ onClose: () => void }> = ({ onClose }) => {
  const { setTasks, selectedDate } = useContext(
    CalendarContext
  ) as CalendarContextType
  const defaultTaskDate = addHours(selectedDate, 1)

  const [selectedTaskDate, setSelectedTaskDate] = useState(defaultTaskDate)
  const [taskName, setTaskName] = useState('')
  const [taskDescription, setTaskDescription] = useState('')

  const selectedTaskTime = selectedTaskDate.toLocaleTimeString('default', {
    hour: '2-digit',
    minute: '2-digit'
  })

  const dayStart = startOfDay(selectedTaskDate)
  const dayEnd = endOfDay(selectedTaskDate)
  const dayMinutes = eachMinuteOfInterval(
    { start: dayStart, end: dayEnd },
    { step: 15 }
  )

  const covertDatesToOptionsArray = (datesArray: Date[]) => {
    const optionsArray: ISelectOption[] = []

    datesArray.forEach((dateValue) => {
      const date = new Date(dateValue)
      const time = date.toLocaleString('default', {
        hour: '2-digit',
        minute: '2-digit'
      })

      optionsArray.push({ label: time, value: date.toISOString() })
    })

    return optionsArray
  }

  const randomColorIndex = Math.round(Math.random() * taskColors.length)
  const randomColor = taskColors[randomColorIndex] || taskColors[0]

  const handleSubmit = () => {
    if (!taskName) return

    setTasks((prevTasks) => [
      ...prevTasks,
      {
        date: selectedTaskDate,
        name: taskName,
        description: taskDescription,
        color: randomColor as hexColorType,
        completed: false,
        id: nanoid()
      }
    ])

    setTaskName('')
    setTaskDescription('')

    onClose()
  }

  return (
    <Modal onClose={onClose} title='Add task' className='w-full max-w-sm'>
      <div>
        <Input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder='Title'
          autoFocus
        />
        <div className='relative flex items-center gap-2 py-4'>
          <CalendarSelect
            defaultDate={selectedTaskDate}
            onChange={(newDate) => setSelectedTaskDate(newDate)}
          />
          <Select
            value={{
              label: selectedTaskTime,
              value: selectedTaskDate.toISOString()
            }}
            onChange={(newOption) =>
              setSelectedTaskDate(new Date(newOption.value))
            }
            options={covertDatesToOptionsArray(dayMinutes)}
          />
        </div>
        <Input
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder='Description'
        />
        <div className='flex justify-end pt-2'>
          <button
            onClick={handleSubmit}
            className='rounded-md bg-blue-400 px-3 py-1 text-white'
          >
            Add task
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default TaskFormModal
