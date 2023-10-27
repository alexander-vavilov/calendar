import { FC, ReactNode } from 'react'
import { useDraggable, UniqueIdentifier } from '@dnd-kit/core'
import clsx from 'clsx'

interface IDraggable {
	children: ReactNode
	id: UniqueIdentifier
	data?: object
	className?: string
}

const Draggable: FC<IDraggable> = ({ children, id, data, className }) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id,
		data,
	})
	const style = transform
		? {
				transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
				opacity: 0.6,
		  }
		: undefined

	return (
		<div
			ref={setNodeRef}
			style={style}
			{...listeners}
			{...attributes}
			className={clsx('transition-opacity duration-300', className)}
		>
			{children}
		</div>
	)
}

export default Draggable
