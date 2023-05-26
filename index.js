import { PRODUCT_ID_SELECTOR, addDateToItems, setData } from './src/scripts/index.js'

// Добавить дату на карточки товаров
addDateToItems(PRODUCT_ID_SELECTOR)

// Обработчик кликов по документу и форме
const handleClick = (event) => {
  const dialog = document.getElementById('modal')
  const form = dialog.querySelector('form')
  const productElement = event.target.closest(PRODUCT_ID_SELECTOR)

  const isBuyButton = event.target.dataset?.addbutton

  if (isBuyButton && !dialog.open) {
    setData(dialog, productElement)
    dialog.showModal()
  } else {
    if (event.target.id === 'modalCancel') {
      form.reset()
      dialog.close()
    } else if (event.target.id === 'modalConfirm') {
      form.submit()
      dialog.close()
      alert('Confirmed!')
    }
  }
}

// Функция для изменения темы
const changeTheme = () => {
  const element = document.body
  const isDarkTheme = eval(element.dataset.dark)

  element.dataset.dark = !isDarkTheme
}

// Функция для переключения видимости элемента который скроллит страницу вверх
const toggleScrollToTop = () => {
  const scrollToTop = document.querySelector('.scrollToTop');
  // console.log('scroll')
  if (window.pageYOffset > 100) {
    scrollToTop.classList.add('scrollToTop-show');
  } else {
    scrollToTop.classList.remove('scrollToTop-show');
  }
}

// Функция скролла страницы вверх
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Инициирование eventListeners
window.document.addEventListener('click', handleClick)

document.getElementById('themeToggler').addEventListener('click', changeTheme)

window.addEventListener('scroll', toggleScrollToTop);

document.querySelector('.scrollToTop').addEventListener('click', scrollToTop);