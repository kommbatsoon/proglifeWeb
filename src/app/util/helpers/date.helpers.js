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

export const getCurrentDate = () => new Date(Date.now());
