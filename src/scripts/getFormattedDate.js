// Returns a formatted date in the string format 'Saturday, 4th week of January 2022'
export const getFormattedDate = (dateInit, locale = 'en-EN') => {
  const date = dateInit.getDate();
  const dayString = dateInit.toLocaleDateString(locale, { weekday: 'short' })
  const month = dateInit.toLocaleString(locale, { month: 'long' })
  const year = dateInit.getFullYear()

  const firstDayOfMonth = new Date(dateInit.getFullYear(), dateInit.getMonth(), 1);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const offset = firstDayOfWeek > 0 ? firstDayOfWeek - 1 : 6;
  const weekNumber = Math.ceil((date + offset) / 7);

  return `${dayString}, ${weekNumber}th week of ${month} ${year}`
}
