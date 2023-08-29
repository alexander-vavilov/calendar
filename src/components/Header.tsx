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
			<div className='relative flex w-64 bg-slate-200/70 border-2 border-slate-300/30 rounded-lg'>
				<div className='flex flex-auto justify-between z-10'>
					{displayModes.map(mode => (
						<button
							key={mode}
							onClick={() => setDisplayMode(mode)}
							className='flex flex-auto justify-center items-center w-full p-2 text-sm font-medium capitalize'
						>
							{mode}
						</button>
					))}
				</div>
				<div
					className='absolute top-1/2 left-0 h-[90%] bg-white border-2 border-gray-300/50 rounded-lg shadow-sm transition-transform duration-300'
					style={{
						width: `calc(${100 / displayModes.length}%)`,
						transform: `translate(${
							displayModes.findIndex(mode => mode === displayMode) * 100
						}%, -50%)`,
					}}
				/>
			</div>
		</header>
	)
}

export default Header
