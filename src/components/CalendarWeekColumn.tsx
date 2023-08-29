import clsx from 'clsx'
import { FC, ReactNode } from 'react'

interface ICalendarWeekColumn {
	title: string
	children: ReactNode
	className?: string
}

const CalendarWeekColumn: FC<ICalendarWeekColumn> = ({
	title,
	children,
	className,
}) => {
	return (
		<div className={clsx('flex flex-col flex-auto', className)}>
			<div className='flex justify-center items-center min-w-[70px] h-12 w-full border-b border-gray-300'>
				<span className='text-black/60 font-medium'>{title}</span>
			</div>
			<div className='flex flex-col flex-auto'>{children}</div>
		</div>
	)
}

export default CalendarWeekColumn
