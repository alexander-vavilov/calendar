import { FC } from 'react'
import { hexColorType } from '../../types'

interface ITaskBase {
  color: hexColorType
  name: string
}

const TaskBase: FC<ITaskBase> = ({ color, name }) => {
  return (
    <div className='task p-1' style={{ background: color }}>
      <span className='text-sm font-normal leading-none'>{name}</span>
    </div>
  )
}

export default TaskBase
