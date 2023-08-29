import { useContext, useState } from 'react'
import Calendar from './components/Calendar'
import CalendarSmall from './components/CalendarSmall/CalendarSmall'
import { CalendarContext } from './contexts/CalendarContext'
import Header from './components/Header'
import { CalendarContextType } from './types'
import TaskFormModal from './components/TaskFormModal'
import { HiOutlinePlus } from 'react-icons/hi'

function App() {
	const date = new Date()
	const { selectedDate, setSelectedDate } = useContext(
		CalendarContext
	) as CalendarContextType

	const [isTaskFormModal, setIsTaskFormModal] = useState(false)

	return (
		<div className='flex h-dynamic-screen'>
			<aside className='max-w-xs p-5 shadow-xl'>
				<span className='text-2xl font-bold'>
					<span className='text-red-500'>Hittau</span>Calendar
				</span>

				<div className='flex flex-col divide-y divide-gray-200 gap-4 pt-[5vh]'>
					<div>
						<h1>Calendar</h1>
						<CalendarSmall
							date={date}
							selectedDate={selectedDate}
							setSelectedDate={setSelectedDate}
						/>
					</div>
					<div>
						<h1>Tasks</h1>
						<ul>
							<li>task 1</li>
							<li>task 2</li>
							<li>task 3</li>
							<li>task 4</li>
						</ul>
					</div>
				</div>
			</aside>
			<main className='flex flex-col flex-auto bg-white'>
				<Header />
				<div className='flex-auto bg-slate-200/70 rounded-2xl overflow-hidden'>
					<Calendar />
				</div>
			</main>
			<button
				onClick={() => setIsTaskFormModal(true)}
				className='fixed bottom-10 right-10 p-4 bg-red-600 rounded-full'
			>
				<HiOutlinePlus color='#fff' size={24} />
			</button>
			<TaskFormModal
				isOpen={isTaskFormModal}
				onClose={() => setIsTaskFormModal(false)}
			/>
		</div>
	)
}

export default App
