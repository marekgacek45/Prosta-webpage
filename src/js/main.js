const hamburgerBtn = document.querySelector('.hamburger')
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

const buttons = document.querySelectorAll('[data-carousel-button]')

buttons.forEach(button => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1
      const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")
  
      const activeSlide = slides.querySelector("[data-active]")
      let newIndex = [...slides.children].indexOf(activeSlide) + offset
      if (newIndex < 0) newIndex = slides.children.length - 1
      if (newIndex >= slides.children.length) newIndex = 0
  
      slides.children[newIndex].dataset.active = true
      delete activeSlide.dataset.active
	})
})

hamburgerBtn.addEventListener('click', hamburgerHandler)

footerYear()
