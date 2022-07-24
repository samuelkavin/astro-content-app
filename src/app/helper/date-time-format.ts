import moment from 'moment';

export const formatTime = (time: string) => {
	return moment(time).format('hh:mm A');
};

export const isToday = (date: string) => {
	return moment(date).isSame(new Date(), 'day');
};

export const dayOfWeek = (date: string) => {
	return moment(date).format('ddd');
};
