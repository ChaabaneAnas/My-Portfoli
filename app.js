let humb = document.querySelector(".humb");
let navMenu = document.querySelector(".nav");

console.log(humb,navMenu)
humb.addEventListener('click',function(e){
navMenu.classList.add('active')
})