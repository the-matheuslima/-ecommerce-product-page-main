const hamburguer = document.querySelector('.hamburguer ')
const navUl = document.querySelector('.nav-ul')

hamburguer.addEventListener('click', () => {
    navUl.classList.toggle('add')
})