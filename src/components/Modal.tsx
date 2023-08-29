import clsx from 'clsx'
import { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { IoIosClose } from 'react-icons/io'
import useClickAway from '../hooks/useClickAway'

interface IModal {
	isOpen: boolean
	onClose: () => void
	children: ReactNode
	title: string
	className?: string
	overlay?: boolean
}

const Modal: FC<IModal> = ({
	isOpen,
	onClose,
	children,
	title,
	className,
	overlay = true,
}) => {
	const element = document.getElementById('modal')

	const ref = useClickAway(() => onClose())

	if (!element) return
	return (
		isOpen &&
		createPortal(
			<>
				<div
					ref={ref}
					className={clsx(
						'fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-4 bg-white shadow-xl rounded-lg z-30',
						className
					)}
				>
					<header className='flex justify-between items-center gap-4 pb-4'>
						<span className='text-lg font-medium'>{title}</span>
						<button onClick={onClose}>
							<IoIosClose size={28} />
						</button>
					</header>
					{children}
				</div>
				{overlay && (
					<div className='fixed top-0 left-0 w-full h-full bg-black/50 z-20' />
				)}
			</>,
			element
		)
	)
}

export default Modal
