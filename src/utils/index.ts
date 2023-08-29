import {
	differenceInDays,
	eachDayOfInterval,
	endOfMonth,
	endOfWeek,
	getDay,
	startOfMonth,
	startOfWeek,
} from 'date-fns'

export const getDaysCount = (date: Date) => {
	const startDate = startOfMonth(date)
	const endDate = endOfMonth(date)
	return differenceInDays(endDate, startDate) + 1
}

export const getDays = (date: Date, interval: 'week' | 'month') => {
	let start
	let end

	switch (interval) {
		case 'week':
			start = startOfWeek(date)
			end = endOfWeek(date)
			break
		case 'month':
			start = startOfMonth(date)
			end = endOfMonth(date)
	}

	return eachDayOfInterval({ start, end })
}

export const getPrefixDaysCount = (date: Date) => {
	const startDate = startOfMonth(date)
	return getDay(startDate) - 1
}
