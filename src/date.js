var moment = require('moment');
/**
 * 
 * @param {} month 
 */
function getMonthIndex(month){
  return moment().month(month).format('M');
}

const convertTime12to24 = (time12h) => {
  const [time, modifier] = time12h.split(' ');
  let [hours, minutes] = time.split(':');

  if (hours === '12') {
    hours = '00';
  }

  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }

  return `T${hours}:${minutes}:00`;
}

function getDateInRequiredFormat(dateString){
  const splitDateString = dateString.split(" "); 
  const DateArray = splitDateString.slice(0,3);
  const [month, day, year] = DateArray;
  const MomentDateObj = moment().set({'year': year, 'month': getMonthIndex(month)-1, 'date': day});
  const DateObj = MomentDateObj.toDate().toISOString().replace(/T.*$/, '');
  return DateObj+getTimeInRequiredFormat(splitDateString);;
}

function getTimeInRequiredFormat(dateString){
  const timeString = dateString[dateString.length-1];
  let AMPM = timeString.slice(timeString.length-2,timeString.length)
  AMPM = timeString.replace(AMPM,` ${AMPM}`);
  const finalTimeString = convertTime12to24(AMPM);
  return finalTimeString;
} 

module.exports = getDateInRequiredFormat;
