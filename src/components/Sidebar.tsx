import { FC, useContext } from 'react'
import CalendarSmall from './CalendarSmall/CalendarSmall'
import { CalendarContext } from '../contexts/CalendarContext'
import { CalendarContextType } from '../types'
import TaskSmall from './Tasks/TaskSmall'
import { format } from 'date-fns'

const Sidebar: FC = () => {
  const { selectedDate, setSelectedDate, tasks } = useContext(
    CalendarContext
  ) as CalendarContextType

  return (
    <aside className='max-w-xs p-5 shadow-xl'>
      <span className='text-2xl font-bold'>
        <span className='text-red-500'>Hittau</span>Calendar
      </span>

      <div className='flex flex-col divide-y divide-gray-200'>
        <div className='py-4'>
          <h1 className='text-xl text-black/50'>Calendar</h1>
          <CalendarSmall
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
        {tasks?.length > 0 && (
          <div className='py-4'>
            <h1 className='text-xl text-black/50'>Tasks</h1>
            <ul className='flex flex-col gap-4 py-2 pl-3'>
              {tasks.map(
                ({ name, color, date, description, completed, id }) => (
                  <li key={id} className='flex flex-col gap-1'>
                    <div className='flex items-center gap-1'>
                      <TaskSmall color={color} />
                      <span className='select-none text-sm leading-none text-black/60'>
                        {format(date, 'dd LLL hh:mm')}
                      </span>
                    </div>
                    <div className='pl-2.5'>
                      <div className='flex'>
                        <input
                          type='checkbox'
                          defaultChecked={completed}
                          id={id}
                          onChange={() =>
                            console.log(
                              'completed (Will be implemented with firestore)'
                            )
                          }
                          className='peer'
                        />
                        <label
                          htmlFor={id}
                          className='cursor-pointer select-none pl-1 leading-none peer-checked:line-through'
                        >
                          {name}
                        </label>
                      </div>
                      <span className='text-gray-500'>{description}</span>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </aside>
  )
}

export default Sidebar
