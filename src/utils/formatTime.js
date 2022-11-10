const MILISECONDS_IN_DAY = 24 * 60 * 60 * 1000;
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const formatTime = (date) => {
  const mDate = new Date(date),
    rn = new Date();
  if (mDate.getTime() > rn.getTime()) return;

  // Check if the date is the same day or different
  if (rn.getTime() - mDate.getTime() >= MILISECONDS_IN_DAY)
    // Format the time into day
    return `${mDate.getDate()} ${MONTH_NAMES[mDate.getMonth()].substring(
      0,
      3
    )}`;

  // Format the time into hour and minute
  return `${
    mDate.getHours() > 12 ? mDate.getHours() - 12 : mDate.getHours()
  }:${mDate.getMinutes()} ${mDate.getHours() > 12 ? "PM" : "AM"}`;
};
