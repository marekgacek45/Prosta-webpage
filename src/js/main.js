const hamburgerBtn  = document.querySelector('.hamburger')
const navList = document.querySelector('.nav__list-mobile')

const hamburgerHandler = () => {
hamburgerBtn.classList.toggle('is-active')
navList.classList.toggle('nav__list-mobile--active')

}




hamburgerBtn.addEventListener('click',hamburgerHandler)