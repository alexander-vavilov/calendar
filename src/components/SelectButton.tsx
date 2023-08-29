import { FC } from 'react'
import { ISelectButton } from '../types'

const SelectButton: FC<ISelectButton> = ({ onClick, label }) => {
	return (
		<button
			onClick={onClick}
			className='px-2 py-1 border border-gray-300 rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-300'
		>
			{label}
		</button>
	)
}

export default SelectButton
