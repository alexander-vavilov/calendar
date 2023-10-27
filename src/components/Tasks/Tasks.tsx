import { FC } from 'react'
import { TaskVariantType, taskType } from '../../types'
import Task from './Task'
import clsx from 'clsx'

interface ITasks {
  items: taskType[]
  variant?: TaskVariantType
}

const Tasks: FC<ITasks> = ({ items, variant }) => {
  return (
    <div
      className={clsx(
        'flex gap-1',
        variant === 'small' ? 'pointer-events-none' : 'flex-col'
      )}
    >
      {items.map(({ name, date, id, color }) => (
        <Task
          key={name}
          name={name}
          date={date}
          id={id}
          variant={variant}
          color={color}
        />
      ))}
    </div>
  )
}

export default Tasks
