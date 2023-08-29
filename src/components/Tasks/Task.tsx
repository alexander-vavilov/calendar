import clsx from 'clsx'
import { FC } from 'react'
import { TaskVariantType, hexColorType } from '../../types'

interface ITask {
	name: string
	date: Date
	variant?: TaskVariantType
	color: hexColorType
}

const Task: FC<ITask> = ({ name, date, variant = 'base', color }) => {
	const dateString = date.toLocaleString('default', {
		day: '2-digit',
		month: 'short',
		hour: '2-digit',
		minute: '2-digit',
	})

	return (
		<div
			className={clsx(
				'flex flex-col text-white rounded-md',
				variant === 'large' ? 'p-3' : variant === 'base' ? 'p-1' : 'w-1 h-1'
			)}
			style={{ background: color }}
		>
			{variant !== 'small' && (
				<span
					className={clsx(
						'font-normal',
						variant === 'large' ? 'text-base leading-4' : 'text-sm leading-none'
					)}
				>
					{name}
				</span>
			)}
			{variant === 'large' && <span className='font-normal'>{dateString}</span>}
		</div>
	)
}

export default Task
