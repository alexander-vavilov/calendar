import clsx from 'clsx'
import { FC, ReactNode } from 'react'

interface ICell {
	children?: ReactNode
	className?: string
	onClick?: () => void
}

const Cell: FC<ICell> = ({ children, className, onClick }) => {
	return (
		<div onClick={onClick} className={clsx('text-sm font-medium', className)}>
			{children}
		</div>
	)
}

export default Cell
