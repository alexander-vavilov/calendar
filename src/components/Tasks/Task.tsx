import { FC } from 'react'
import { TaskVariantType, hexColorType } from '../../types'
import Draggable from '../Draggable'
import TaskSmall from './TaskSmall'
import TaskBase from './TaskBase'
import TaskLarge from './TaskLarge'

interface ITask {
	name: string
	date: Date
	id: string
	variant?: TaskVariantType
	color: hexColorType
}

const Task: FC<ITask> = ({ name, date, id, variant = 'base', color }) => {
	const dateString = date.toLocaleString('default', {
		day: '2-digit',
		month: 'short',
		hour: '2-digit',
		minute: '2-digit',
	})

	const renderSwitch = () => {
		switch (variant) {
			case 'small':
				return <TaskSmall color={color} />
			case 'base':
				return <TaskBase color={color} name={name} />
			case 'large':
				return <TaskLarge color={color} name={name} dateString={dateString} />
		}
	}

	return (
		<Draggable id={id} data={{ date }}>
			{renderSwitch()}
		</Draggable>
	)
}

export default Task
