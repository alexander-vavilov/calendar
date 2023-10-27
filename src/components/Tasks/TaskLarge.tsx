import { FC } from 'react'
import { hexColorType } from '../../types'

interface ITaskLarge {
	color: hexColorType
	name: string
	dateString: string
}

const TaskLarge: FC<ITaskLarge> = ({ color, name, dateString }) => {
	return (
		<div className='task p-3' style={{ background: color }}>
			<span className='font-normal text-base leading-4'>{name}</span>
			<span className='font-normal'>{dateString}</span>
		</div>
	)
}

export default TaskLarge
