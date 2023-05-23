// Returns a random date in range
export const getRandomdate = (startDate, endDate) => {
  const startTimestamp = +startDate
  const endTimestamp = +endDate

  const randomTimestamp = Math.round(startTimestamp + Math.random() * (endTimestamp - startTimestamp))

  return new Date(randomTimestamp)
}
