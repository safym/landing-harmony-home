import { ADD_DATE_SELECTOR, getFormattedDate, getRandomdate } from './index.js'

// Adds a date to the elements of the list obtained by selector
export const addDateToItems = (selector) => {
  const [...elementList] = document.querySelectorAll(selector)

  elementList.map((listItem) => {
    const startDate = new Date(2023, 0, 1)
    const endDate = new Date()

    const date = getRandomdate(startDate, endDate)
    const formattedDate = getFormattedDate(date)

    const dateElement = listItem.querySelector(ADD_DATE_SELECTOR)

    if (dateElement) {
      dateElement.innerHTML = formattedDate
      dateElement.dataset.addDate = date
    }
  })
}
