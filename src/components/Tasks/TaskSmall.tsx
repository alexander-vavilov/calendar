import { FC } from 'react'
import { hexColorType } from '../../types'

const TaskSmall: FC<{ color: hexColorType }> = ({ color }) => {
  return (
    <div
      className='h-[5px] w-[5px] rounded-full shadow-md'
      style={{ background: color }}
    />
  )
}

export default TaskSmall
