import {
  PRODUCT_NAME_SELECTOR,
  ADD_DATE_SELECTOR,
  FORM_PRODUCT_NAME_SELECTOR,
  FORM_ADD_DATE_SELECTOR,
} from './index.js'

// Add modal element to DOM with data from productElement
export const setData = (dialogElement, productElement) => {
  const productName = productElement.querySelector(PRODUCT_NAME_SELECTOR).innerHTML
  const formattedAddDate = productElement.querySelector(ADD_DATE_SELECTOR).innerHTML

  const dialogProductName = dialogElement.querySelector(FORM_PRODUCT_NAME_SELECTOR)
  const dialogAddDate = dialogElement.querySelector(FORM_ADD_DATE_SELECTOR)

  dialogProductName.innerHTML = productName
  dialogAddDate.innerHTML = formattedAddDate
}
