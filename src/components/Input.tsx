import { FC } from 'react'
import clsx from 'clsx'

interface IInput {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  autoFocus?: boolean
}

const Input: FC<IInput> = ({ value, onChange, placeholder, autoFocus }) => {
  return (
    <div className='relative'>
      <input
        type='text'
        value={value}
        onChange={onChange}
        className='peer w-full rounded-lg border-2 border-gray-300/50 bg-white p-2 transition-colors duration-300 focus:border-blue-500'
        autoFocus={autoFocus}
      />
      {placeholder && (
        <label
          className={clsx(
            'pointer-events-none absolute left-2 -translate-y-1/2 bg-white px-1 text-[15px] font-medium text-gray-500 transition-all duration-300',
            value.length ? 'top-0' : 'top-1/2 peer-focus:top-0'
          )}
        >
          {placeholder}
        </label>
      )}
    </div>
  )
}

export default Input
