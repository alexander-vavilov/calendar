export type displayModeType = 'day' | 'week' | 'month'

export type TaskVariantType = 'small' | 'base' | 'large'

export type hexColorType = `#${string}`

export type taskType = {
  date: Date
  id: string
  name: string
  description: string
  color: hexColorType
  completed: boolean
}

export type CalendarContextType = {
  selectedDate: Date
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>
  displayMode: displayModeType
  setDisplayMode: React.Dispatch<React.SetStateAction<displayModeType>>
  tasks: taskType[]
  setTasks: React.Dispatch<React.SetStateAction<taskType[]>>
}

export type ModalContextType = {
  openModal: (content: JSX.Element, title: string) => void
  closeModal: () => void
}

export interface ICalendarSmallHeadingProps {
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
