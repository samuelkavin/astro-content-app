import moment from 'moment';
import { dayOfWeek, formatTime, isToday } from '../../helper';

describe('Date time format', () => {
	describe('formatTime', () => {
		it('should format datetime to time to hh:mm A', () => {
			const input = '2022-08-08 16:00:00.0';

			formatTime(input);
			const result = moment(input).format('hh:mm A');

			expect(result).toBe('04:00 PM');
		});
	});

	describe('isToday', () => {
		it('should return false if pass not today date', () => {
			const input = '2022-07-20';

			isToday(input);
			const result = moment(input).isSame(new Date(), 'day');

			expect(result).toBe(false);
		});

		it('should return true if pass today date', () => {
			const input = new Date().toString();

			isToday(input);
			const result = moment(input).isSame(new Date(), 'day');

			expect(result).toBe(true);
		});
	});

    describe('dayOfWeek', () => {
        it('should return day of the week', () => {
			const input = '2022-08-02 16:00:00.0';

			dayOfWeek(input);
			const result = moment(input).format('ddd');

			expect(result).toBe('Tue');
		});
    })
});
