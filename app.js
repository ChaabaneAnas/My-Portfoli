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
const data = [{
  cTitle: 'Movie Streaming website PranMovies',
  cImg: 'src="images/pranMovies.png" alt="ImagePholder"',
  cTechnologies: ['React', 'css', 'javaScript', 'html'],
  cbutton: 'See Project',
  mImage: 'src="images/PranMoviesPopup.png" alt="" class="img"',
  dImage: 'src="images/PranMoviesPopup.png"',
  header: 'See Your Favorite Movie',
  techs: ['Webpack ', 'Jest', 'Redux'],
  live: 'href = "https://promzzykoncepts.github.io/PranMovies/"',
  source: 'href = "https://github.com/ChaabaneAnas/PranMovies"',
  descrip: 'A attractive Movie Streaming web app that displays movie from an Api and lets a user add reviews, likes and comment,'
},
{
  cTitle: 'Leading Design Global Summit',
  cImg: 'src="images/GlobalSummit.png" alt="ImagePholder"',
  cTechnologies: [ 'css', 'javaScript', 'html'],
  cbutton: 'See Project',
  mImage: 'src="images/GlobalSummit.png" alt="" class="img"',
  dImage: 'src="images/GlobalSummit.png"',
  header: 'Present Your event to the world',
  techs: ['Ruby on Rails', 'css', 'javascript'],
  live: 'href = "https://chaabaneanas.github.io/Global-Summit-/"',
  source: 'href = "https://github.com/ChaabaneAnas/Global-Summit-"',
  descrip: 'A attractive Movie Streaming web app that displays movie from an Api and lets a user add reviews, likes and comment,',
},
{
  cTitle: 'interractive React Books Store',
  cImg: 'src="images/bookStore.png" alt="ImagePholder"',
  cTechnologies: ['react','Redux', 'css', 'javaScript', 'html'],
  cbutton: 'See Project',
  mImage: 'src="images/SnapshootPortfolio.png" alt="" class="img"',
  dImage: 'src="images/bookStore.png"',
  header: 'Add remove and track your progress',
  techs: ['React ','Redux', 'css', 'javascript'],
  live: 'href = "https://redux-react-book-store.netlify.app/"',
  source: 'href = "https://github.com/ChaabaneAnas/BookStore"',
  descrip: 'A simple interactive web app, that allow users to add remove ,edit books and update their progress',
},
{
  cTitle: 'Web Calculator MAth Magician',
  cImg: 'src="images/MathMagician.png" alt="ImagePholder"',
  cTechnologies: ['Ruby on rails', 'css', 'javaScript', 'html'],
  cbutton: 'See Project',
  mImage: 'src="images/MathMagician.png" alt="" class="img"',
  dImage: 'src="images/MathMagician.png"',
  header: 'Performe Your math operation on the web',
  techs: ['React','Redux', 'css', 'javascript'],
  live: 'href = "https://6325ae11fcbd02398dda82b3--math-magicians-react001.netlify.app/"',
  source: 'href = "https://github.com/ChaabaneAnas/Math-Magicians"',
  descrip: 'A Simple yet powerful web app, that allow the user to perform Simple math operation right on your browser,how is the design?',
},
{
  cTitle: 'Multi-Post Stories Gain+Glory',
  cImg: 'src="images/ImgPlaholder.png" alt="ImagePholder"',
  cTechnologies: ['Ruby on rails', 'css', 'javaScript', 'html'],
  cbutton: 'See Project',
  mImage: 'src="images/SnapshootPortfolio.png" alt="" class="img"',
  dImage: 'src="images/SnapshootdPortfolio.png"',
  header: 'Keeping track of hundreds of components',
  techs: ['Ruby on Rails', 'css', 'javascript'],
  live: 'href = "https://chaabaneanas.github.io/PortfolioSetup_Mobile-Version-Setup/"',
  source: 'href = "#"',
  descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
},
{
  cTitle: 'Multi-Post Stories Gain+Glory',
  cImg: 'src="images/ImgPlaholder.png" alt="ImagePholder"',
  cTechnologies: ['Ruby on rails', 'css', 'javaScript', 'html'],
  cbutton: 'See Project',
  mImage: 'src="images/SnapshootPortfolio.png" alt="" class="img"',
  dImage: 'src="images/SnapshootdPortfolio.png"',
  header: 'Keeping track of hundreds of components',
  techs: ['Ruby on Rails', 'css', 'javascript'],
  live: 'href = "https://chaabaneanas.github.io/PortfolioSetup_Mobile-Version-Setup/"',
  source: 'href = "#"',
  descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
}];

const portfolios = document.querySelector('#works');
data.forEach((data,id) => {
  const innerProject = document.createElement('div');
  innerProject.classList.add('card');
  innerProject.innerHTML = (`
      <img ${data.cImg}">
         <div>
            <p>${data.cTitle}</p>
            <ul>
               <li>${data.cTechnologies[0]}</li>
               <li>${data.cTechnologies[1]}</li>
               <li>${data.cTechnologies[2]}</li>
               <li>${data.cTechnologies[3]}</li>
            </ul>
            <button id="${id}" type="button">${data.cbutton}</button>
         </div>
    `);
  portfolios.appendChild(innerProject);
});
const body = document.querySelector('body');
const popup = document.querySelector('.overlay');
const popupCont = document.createElement('div');
popupCont.innerHTML = (`
            <div class="imgs">
            <img ${data[e.target.id].dImage}>
            <img ${data[e.target.id].dImage}">
            <a id="clsbtn" href="#">×</a>
            </div>
            <h3 class="title">${data[e.target.id].header}</h3>
            <ul class="tech">
              <li>${data[e.target.id].techs[0]}</li>
              <li>${data[e.target.id].techs[1]}</li>
              <li> ${data[e.target.id].techs[2]}</li>
            </ul>
            <p ${data[e.target.id].descrip}</p>
          <div class="buttons">
          <a class="live" ${data[e.target.id].live}">See Live <img src="/images/seeliveicon.png" alt=""></a>
          <a class="source" href=" ${data[e.target.id].source}">See Source <img src="/images/Vector.png" alt=""></a>
          </div>
  `);
popupCont.classList.add('container');
body.appendChild(popupCont);

function projectPopup() {
  if (popupCont == null) return;
  popupCont.classList.add('active');
  popup.classList.add('active');
}
function clsIt() {
  popupCont.classList.remove('active');
  popup.classList.remove('active');
}

const projectnBtn = document.querySelectorAll('.card button');
projectnBtn.forEach((btn) => btn.addEventListener('click', (e) => {
  projectPopup(e);
}));
document.querySelector('#clsbtn').addEventListener('click', (clsbtn) => clsIt(clsbtn));

const form = document.getElementById('form');
const [username, email, message] = form.elements;

if (!localStorage.getItem('form-data')) {
  const data = { usernameValue: '', emailValue: '', messageValue: '' };
  localStorage.setItem('form-data', JSON.stringify(data));
}

const setDataInBrowser = (element, elementValue) => {
  element.addEventListener('change', () => {
    const retrivedData = JSON.parse(localStorage.getItem('form-data'));
    retrivedData[elementValue] = element.value;
    localStorage.setItem('form-data', JSON.stringify(retrivedData));
  });
};

const setDataInFormFields = (element, elementValue) => {
  element.value = elementValue;
};

document.addEventListener('DOMContentLoaded', () => {
  // set form fields data in the local storage of the browser.
  setDataInBrowser(username, 'usernameValue');
  setDataInBrowser(email, 'emailValue');
  setDataInBrowser(message, 'messageValue');
  // load form previous data from storage and set them in form field
  const data = JSON.parse(localStorage.getItem('form-data'));
  setDataInFormFields(username, data.usernameValue);
  setDataInFormFields(email, data.emailValue);
  setDataInFormFields(message, data.messageValue);
});