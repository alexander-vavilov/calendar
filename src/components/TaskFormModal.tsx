import { FC, useState, useContext } from 'react'
import { CalendarContext } from '../contexts/CalendarContext'
import { CalendarContextType, ISelectOption } from '../types'
import Modal from './Modal'
import { addHours, eachMinuteOfInterval, endOfDay, startOfDay } from 'date-fns'
import Select from './Select'
import CalendarSelect from './CalendarSelect'
import Input from './Input'

interface ITaskFormModal {
	isOpen: boolean
	onClose: () => void
}

const TaskFormModal: FC<ITaskFormModal> = ({ isOpen, onClose }) => {
	const { setTasks } = useContext(CalendarContext) as CalendarContextType

	const currentDate = new Date()
	const defaultTaskDate = addHours(currentDate, 1)

	const [selectedTaskDate, setSelectedTaskDate] = useState(defaultTaskDate)
	const [taskName, setTaskName] = useState('')
	const [taskDescription, setTaskDescription] = useState('')

	const selectedTaskTime = selectedTaskDate.toLocaleTimeString('default', {
		hour: '2-digit',
		minute: '2-digit',
	})

	const dayStart = startOfDay(selectedTaskDate)
	const dayEnd = endOfDay(selectedTaskDate)
	const dayMinutes = eachMinuteOfInterval(
		{ start: dayStart, end: dayEnd },
		{ step: 15 }
	)

	const covertDatesToOptionsArray = (datesArray: Date[]) => {
		const optionsArray: ISelectOption[] = []

		datesArray.forEach(dateValue => {
			const date = new Date(dateValue)
			const time = date.toLocaleString('default', {
				hour: '2-digit',
				minute: '2-digit',
			})

			optionsArray.push({ label: time, value: date.toISOString() })
		})

		return optionsArray
	}

	const handleSubmit = () => {
		if (!taskName) return

		setTasks(prevTasks => [
			...prevTasks,
			{
				date: selectedTaskDate,
				name: taskName,
				description: taskDescription,
				color: '#4ad3d3',
			},
		])

		setTaskName('')
		setTaskDescription('')

		onClose()
	}

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title='Add task'
			className='max-w-sm w-full'
		>
			<div>
				<Input
					value={taskName}
					onChange={e => setTaskName(e.target.value)}
					placeholder='Title'
				/>
				<div className='relative flex items-center gap-2 py-4'>
					<CalendarSelect
						defaultDate={selectedTaskDate}
						onChange={newDate => setSelectedTaskDate(newDate)}
					/>
					<Select
						value={{
							label: selectedTaskTime,
							value: selectedTaskDate.toISOString(),
						}}
						onChange={newOption =>
							setSelectedTaskDate(new Date(newOption.value))
						}
						options={covertDatesToOptionsArray(dayMinutes)}
					/>
				</div>
				<Input
					value={taskDescription}
					onChange={e => setTaskDescription(e.target.value)}
					placeholder='Description'
				/>
				<div className='flex justify-end pt-2'>
					<button
						onClick={handleSubmit}
						className='px-3 py-1 text-white bg-blue-400 rounded-md'
					>
						Add task
					</button>
				</div>
			</div>
		</Modal>
	)
}

export default TaskFormModal
