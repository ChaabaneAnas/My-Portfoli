const humb = document.querySelector('.humb');
const navMenu = document.querySelector('.nav');
const closeBtn = document.querySelector('.closebtn');
const menuElement = document.querySelector('.navL');

function active() {
  navMenu.classList.add('active');
}
function uActive() {
  navMenu.classList.remove('active');
}

humb.addEventListener('click', active);
closeBtn.addEventListener('click', uActive);
menuElement.addEventListener('click', uActive);

const data = {
  Image: 'src="images/SnapshootPortfolio.png" alt="" class="img"',
  header: 'Keeping track of hundreds of components',
  techs: ['Ruby on Rails','css','javascript'],
  descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
}
const window = document.querySelector('.container')
const overlay = document.querySelector('.overlay')
const buttons = document.querySelectorAll('.card button')
buttons.forEach (button => button.addEventListener(click, () => {
  popIt(window);
}));


function popIt {
  if (window == null) return
  window.classList.add('active');
  window.classList.add('active');
}

function clsIt {
  if (window == null) return
  window.classList.remove('active');
  window.classList.remove('active');
}


