import { PRODUCT_ID_SELECTOR, addDateToItems, setData } from './src/scripts/index.js'

addDateToItems(PRODUCT_ID_SELECTOR)

const handleClick = (event) => {
  const dialog = document.getElementById('modal')
  const productElement = event.target.closest(PRODUCT_ID_SELECTOR)

  const isBuyButton = event.target.dataset?.addbutton

  if (isBuyButton && !dialog.open) {
    setData(dialog, productElement)
    dialog.showModal()
  } else {
    if (event.target.id === 'modalCancel') {
      dialog.close()
    } else if (event.target.id === 'modalConfirm') {
      alert('Confirmed!')
      dialog.close()
    }
  }
}

window.document.addEventListener('click', handleClick)
