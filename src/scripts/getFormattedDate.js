// Returns a formatted date in the string format 'Saturday, 4th week of January 2022'
export const getFormattedDate = (date, locale = 'en-EN') => {
  const day = date.toLocaleDateString(locale, { weekday: 'short' })
  const weekCount = Math.trunc(date.getDate() / 7) // переделать
  const month = date.toLocaleString(locale, { month: 'long' })
  const year = date.getFullYear()

  return `${day}, ${weekCount}th week of ${month} ${year}`
  return `${date} ${day}, ${weekCount}th week of ${month} ${year}`
}
