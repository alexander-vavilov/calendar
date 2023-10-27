import { useContext } from 'react'
import Calendar from './components/Calendar'
import { CalendarContext } from './contexts/CalendarContext'
import Header from './components/Header'
import { CalendarContextType, ModalContextType } from './types'
import { HiOutlinePlus } from 'react-icons/hi'
import { DndContext, DragEndEvent, UniqueIdentifier } from '@dnd-kit/core'
import { isEqual } from 'date-fns'
import Sidebar from './components/Sidebar'
import { ModalContext } from './contexts/ModalContext'
import TaskFormModalContent from './components/TaskFormModalContent'

function App() {
  const { setTasks, tasks } = useContext(CalendarContext) as CalendarContextType

  const { openModal, closeModal } = useContext(ModalContext) as ModalContextType

  const updateTaskDate = (taskId: UniqueIdentifier, updatedDate: Date) => {
    return tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, date: updatedDate }
      }

      return task
    })
  }

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e

    if (active && over) {
      const taskDate = active.data.current?.date
      const cellDate = over.data.current?.date
      if (isEqual(taskDate, cellDate)) return

      const updatedDate = new Date(over.data.current?.date)
      if (over) setTasks(updateTaskDate(active.id, updatedDate))
    }
  }

  return (
    <div className='flex h-dynamic-screen'>
      <Sidebar />
      <main className='flex flex-auto flex-col bg-white'>
        <Header />
        <div className='flex-auto overflow-hidden rounded-2xl border-2 border-gray-200/70 bg-gray-50'>
          <DndContext onDragEnd={handleDragEnd}>
            <Calendar />
          </DndContext>
        </div>
      </main>
      <button
        onClick={() =>
          openModal(<TaskFormModalContent onClose={closeModal} />, 'Add task')
        }
        className='fixed bottom-10 right-10 rounded-full bg-red-600 p-4 shadow-md'
      >
        <HiOutlinePlus color='#fff' size={24} />
      </button>
    </div>
  )
}

export default App
