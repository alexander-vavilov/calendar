import { FC, ReactNode } from 'react'
import clsx from 'clsx'

interface ICell extends React.ComponentPropsWithoutRef<'div'> {
  children?: ReactNode
  className?: string
}

const Cell: FC<ICell> = ({ children, className, ...props }) => {
  return (
    <div className={clsx('text-sm font-medium', className)} {...props}>
      {children}
    </div>
  )
}

export default Cell
