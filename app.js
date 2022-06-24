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

// popupWindow

const win = document.querySelector('.container');
const overlay = document.querySelector('.overlay');
const buttons = document.querySelectorAll('.card button');
const data = {
  mImage: 'src="images/SnapshootPortfolio.png" alt="" class="img"',
  dImage: 'src="images/SnapshootdPortfolio.png"',
  header: 'Keeping track of hundreds of components',
  techs: ['Ruby on Rails', 'css', 'javascript'],
  live: 'href = "https://chaabaneanas.github.io/PortfolioSetup_Mobile-Version-Setup/"',
  source: 'href = "#"',
  descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
};

win.innerHTML = (`
<div class="imgs">
<img class="mimg" ${data.mImage}>
<img class="dimg" ${data.dImage}>
<a id = "clsbtn" href="#">&times;</a>
</div>
<h3 class="title">${data.header}</h3>
<ul class="tech">
   <li>Ruby on rails</li>
   <li>css</li>
   <li> JavScript</li>
</ul>
<p class="description">${data.descrip}</p>
<div class="buttons">
<a class="live" ${data.live}>See Live <img src="/images/seeliveicon.png" alt=""></a>
<a class="source" ${data.source}>See Source <img src="/images/Vector.png" alt=""></a>
</div>`);

const clsbtn = document.querySelector('#clsbtn');
function clsIt(clsbtn) {
  win.classList.remove('active');
  overlay.classList.remove('active');
}
clsbtn.addEventListener('click', (clsbtn) => clsIt(clsbtn));
function popIt(win) {
  if (win == null) return;
  win.classList.add('active');
  overlay.classList.add('active');
}

buttons.forEach((button) => button.addEventListener('click', () => {
  popIt(win);
}));
const error = document.querySelector('.errors');
const email = document.querySelector('#email');
const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
  let errorMessage = '';
  const emailLower = email.value.toLowerCase();
  if (emailLower !== email.value) {
    errorMessage = 'email must be in Lowercase!';
    error.innerText = errorMessage;
    e.preventDefault();
  }
});
