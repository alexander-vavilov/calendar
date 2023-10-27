import { taskType } from '../types'

export const getMinTaskDate = (tasks: taskType[]) => {
	if (!tasks.length) return

	const datesArr = [...tasks.map(({ date }) => date.getTime())]
	return new Date(Math.min(...datesArr))
}
