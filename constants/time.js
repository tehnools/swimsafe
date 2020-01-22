import moment from 'moment';


export function getTimeBracket(time) {
  const momentTime = moment(time);
  const CURRENT_HOUR_OF_DAY = momentTime.clone().format('H');
  const formattedDate = momentTime.clone().format('YYYY-MM-DD');

  if (CURRENT_HOUR_OF_DAY >= 0 && CURRENT_HOUR_OF_DAY < 6) {
    return { bracket: 'night', moment: momentTime, formattedDate };
  } if (CURRENT_HOUR_OF_DAY >= 6 && CURRENT_HOUR_OF_DAY < 12) {
    return { bracket: 'morning', moment: momentTime, formattedDate };
  } if (CURRENT_HOUR_OF_DAY >= 12 && CURRENT_HOUR_OF_DAY < 18) {
    return { bracket: 'afternoon', moment: momentTime, formattedDate };
  } if (CURRENT_HOUR_OF_DAY >= 18 && CURRENT_HOUR_OF_DAY <= 24) {
    return { bracket: 'evening', moment: momentTime, formattedDate };
  }
  return { bracket: 'invalid', moment: momentTime, formattedDate };
}


export function getAlertRange(time, timeFrom = moment()) {
  const momentTime = moment(time);

  const morningTime = timeFrom.clone().hour(6).minute(0).second(0);
  const afternoonTime = timeFrom.clone().hour(12).minute(0).second(0);
  const eveningTime = timeFrom.clone().hour(18).minute(0).second(0);

  const isMorning = momentTime.isAfter(morningTime);
  const isAfternoon = momentTime.isAfter(afternoonTime);
  const isEvening = momentTime.isAfter(eveningTime);

  return { isMorning, isAfternoon, isEvening };
}
