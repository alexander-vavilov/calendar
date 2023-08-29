import { FC } from 'react'
import clsx from 'clsx'

interface IInput {
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	placeholder?: string
}

const Input: FC<IInput> = ({ value, onChange, placeholder }) => {
	return (
		<div className='relative'>
			<input
				type='text'
				value={value}
				onChange={onChange}
				className='w-full p-2 bg-white border-2 border-gray-300/50 focus:border-blue-500 rounded-lg transition-colors duration-300 peer'
			/>
			{placeholder && (
				<label
					className={clsx(
						'absolute left-2 -translate-y-1/2 px-1 bg-white text-black/60 text-[15px] font-medium transition-all duration-300 pointer-events-none',
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
