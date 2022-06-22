let humb = document.querySelector(".humb");
let navMenu = document.querySelector(".nav");
let close = document.querySelector(".closebtn");
let menuElement = document.querySelector('.navL')

humb.addEventListener('click',function(e){
navMenu.classList.add('active')
})

close.addEventListener('click', function(e){
    navMenu.classList.remove('active')
})

menuElement.addEventListener('click', function(e){
    navMenu.classList.remove('active')
})