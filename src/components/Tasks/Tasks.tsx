import { FC } from 'react'
import { TaskVariantType, taskType } from '../../types'
import Task from './Task'

interface ITasks {
	items: taskType[]
	variant?: TaskVariantType
}

const Tasks: FC<ITasks> = ({ items, variant }) => {
	return (
		<div className='flex flex-col gap-1'>
			{items.map(({ name, date, color }) => (
				<Task
					key={name}
					name={name}
					date={date}
					variant={variant}
					color={color}
				/>
			))}
		</div>
	)
}

export default Tasks
