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

const changeTheme = () => {
  const element = document.body
  const isDarkTheme = eval(element.dataset.dark)

  element.dataset.dark = !isDarkTheme
}

window.document.addEventListener('click', handleClick)

const themeToggler = document.getElementById('themeToggler')

themeToggler.addEventListener('click', changeTheme)
