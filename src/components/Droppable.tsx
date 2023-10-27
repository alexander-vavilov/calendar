import { FC, ReactNode } from 'react'
import { useDroppable, UniqueIdentifier } from '@dnd-kit/core'

interface IDroppable {
  children: ReactNode
  id: UniqueIdentifier
  className?: string
  data?: object
}

const Droppable: FC<IDroppable> = ({
  children,
  id,
  data,
  className,
  ...props
}) => {
  const { setNodeRef } = useDroppable({ id, data })

  return (
    <div ref={setNodeRef} className={className} {...props}>
      {children}
    </div>
  )
}

export default Droppable
