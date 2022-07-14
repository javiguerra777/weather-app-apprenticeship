// convert to date if false and day of the week if true
const convertUnix = (unix, yes = false) => {
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const date = new Date(unix * 1000);
  if (yes) {
    const day = weekday[date.getDay()];
    return day;
  }
  return date.toLocaleDateString('en-US');
};
export default convertUnix;
