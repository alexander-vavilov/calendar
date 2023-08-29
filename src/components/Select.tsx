import { FC, useState, useEffect } from 'react'
import useClickAway from '../hooks/useClickAway'
import SelectButton from './SelectButton'
import { ISelectOption } from '../types'
import SelectItems from './SelectItems'

interface ISelect {
	value: ISelectOption
	onChange: (newOption: ISelectOption) => void
	options: ISelectOption[]
}

const Select: FC<ISelect> = ({ value, onChange, options }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedOption, setSelectedOption] = useState<ISelectOption>(value)

	const ref = useClickAway(() => setIsOpen(false))

	useEffect(() => {
		onChange && onChange(selectedOption)
	}, [selectedOption])

	return (
		<div ref={ref} className='relative select-none'>
			<SelectButton
				onClick={() => setIsOpen(prevState => !prevState)}
				label={selectedOption.label}
			/>
			<SelectItems
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				setSelectedOption={setSelectedOption}
				options={options}
			/>
		</div>
	)
}

export default Select
