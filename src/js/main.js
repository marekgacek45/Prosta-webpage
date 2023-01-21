const hamburgerBtn  = document.querySelector('.hamburger')
const navList = document.querySelector('.nav__list-mobile')
const footerYearSpan = document.querySelector('.footer__bottom-text--year')

const hamburgerHandler = () => {
hamburgerBtn.classList.toggle('is-active')
navList.classList.toggle('nav__list-mobile--active')
}

const footerYear = () => {
    const date = new Date()
    const year = date.getFullYear()
    
    footerYearSpan.innerHTML = year
}






hamburgerBtn.addEventListener('click',hamburgerHandler)

footerYear()