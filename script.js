const toggle = document.querySelector('.fa-bars')
const nav = document.querySelector('.nav')
const head = document.querySelector('.header')

toggle.addEventListener('click',function(){
    nav.classList.toggle('active')
    toggle.classList.toggle('ham_animation')
    head.classList.toggle('removeShadow')
})