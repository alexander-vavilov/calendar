export type displayModeType = 'day' | 'week' | 'month'

export type TaskVariantType = 'small' | 'base' | 'large'

export type hexColorType = `#${string}`

export type taskType = {
	date: Date
	name: string
	description: string
	color: hexColorType
}

export type CalendarContextType = {
	selectedDate: Date
	setSelectedDate: React.Dispatch<React.SetStateAction<Date>>
	displayMode: displayModeType
	setDisplayMode: React.Dispatch<React.SetStateAction<displayModeType>>
	tasks: taskType[]
	setTasks: React.Dispatch<React.SetStateAction<taskType[]>>
}

export interface ICalendarSmallHeaderProps {
	date: Date
	setDate: React.Dispatch<React.SetStateAction<Date>>
}

export interface ISelectOption {
	label: string
	value: string
}

export interface ISelectButton {
	label: string
	onClick: () => void
}
