import { FC, useContext } from 'react'
import { CalendarContext } from '../contexts/CalendarContext'
import { CalendarContextType, displayModeType } from '../types'

const displayModes: displayModeType[] = ['day', 'week', 'month']

const Header: FC = () => {
  const { displayMode, setDisplayMode } = useContext(
    CalendarContext
  ) as CalendarContextType

  return (
    <header className='w-full p-4'>
      <div className='relative flex w-64 rounded-lg border-2 border-slate-300/30 bg-gray-100'>
        <div className='z-10 flex flex-auto justify-between'>
          {displayModes.map((mode) => (
            <button
              key={mode}
              onClick={() => setDisplayMode(mode)}
              className='flex w-full flex-auto items-center justify-center p-2 text-sm font-medium capitalize'
            >
              {mode}
            </button>
          ))}
        </div>
        <div
          className='absolute left-0 top-1/2 h-[90%] rounded-lg border-2 border-gray-300/50 bg-white shadow-sm transition-transform duration-300'
          style={{
            width: `calc(${100 / displayModes.length}%)`,
            transform: `translate(${
              displayModes.findIndex((mode) => mode === displayMode) * 100
            }%, -50%)`
          }}
        />
      </div>
    </header>
  )
}

export default Header
