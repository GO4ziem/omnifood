const mobileMenu = document.getElementById('mobile-menu')
const menuBar = document.getElementById('menu-bar')
 
menuBar.addEventListener('click', () => {
    mobileMenu.classList.toggle('active')
})
mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active')
})