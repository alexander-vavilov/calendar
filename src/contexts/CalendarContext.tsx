import { createContext, FC, ReactNode, useState } from 'react'
import { CalendarContextType, taskType } from '../types'

export const CalendarContext = createContext<CalendarContextType | null>(null)

export const CalendarContextProvider: FC<{ children: ReactNode }> = ({
  children
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [displayMode, setDisplayMode] = useState<'day' | 'week' | 'month'>(
    'month'
  )
  const [tasks, setTasks] = useState<taskType[]>([])

  const value = {
    selectedDate,
    setSelectedDate,
    displayMode,
    setDisplayMode,
    tasks,
    setTasks
  }

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  )
}
