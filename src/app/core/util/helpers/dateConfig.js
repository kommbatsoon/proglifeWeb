import moment from 'moment';

const DATE_FORMAT = 'DD MMM, HH:mm';
const DATE_FORMAT_NOTIFICATION = 'DD MMM';

const getDiff = (date, param) => {
    const diff = moment().diff(moment(date), param, true);
    return Math.floor(diff);
};

export const getDateTimeLeft = (date) => {
    const daysLeft = getDiff(date, 'd');

    if (daysLeft >= 1) {
        return moment(date).format(DATE_FORMAT);
    }

    let timeLeft;

    const hoursLeft = getDiff(date, 'h');
    if (hoursLeft > 1) {
        timeLeft = hoursLeft + 'h ago';
    } else if (hoursLeft === 1) {
        timeLeft = '1h ago';
    } else {
        const minutesLeft = getDiff(date, 'm');
        if (minutesLeft > 1) {
            timeLeft = minutesLeft + ' min ago';
        } else if (minutesLeft === 1) {
            timeLeft = '1 min ago';
        } else {
            timeLeft = 'just now';
        }
    }

    return timeLeft;
};

export const getDateNotification = (date) => {
    const daysLeft = getDiff(date, 'd');

    if (daysLeft >= 1) {
        return moment(date).format(DATE_FORMAT_NOTIFICATION);
    }
    return 'today';
};

export const getChildAge = (date) => {

    let day = getDiff(date, 'days');
    let week = getDiff(date, 'weeks');
    let month = getDiff(date, 'months');
    let year = getDiff(date, 'years');

    if (day < 32) {
        if (week <= 1) {
            return '1 week';
        } else {
            return week + ' weeks';
        }

    } else if (month < 13) {
        if (month === 1) {
            return '1 month';
        } else {
            return month + ' months';
        }
    } else if (month > 12) {
        if (year === 1) {
            return '1 year';
        } else {
            return year + ' years';
        }
    }

    return '';
};

export const getCurrentDate = () => new Date(Date.now());

export const toDateString = (dateObj) => moment(dateObj).add(3, 'hours').toISOString();

export const getChildLabel = (date) => {
    const ageInfo = getChildAge(date).split(' ');
    return `${ageInfo[0]}-${ageInfo[1]}-old`;
};