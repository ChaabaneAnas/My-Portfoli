const data = [
  {
    cTitle: 'Leading Design Global Summit',
    cImg: 'src="./images/GlobalSummit.png" alt="ImagePholder"',
    cTechnologies: ['Css', 'javaScript', 'html'],
    cbutton: 'See Project',
    mImage: 'src="./images/GlobalSummit.png" alt="" ',
    dImage: 'src="./images/GlobalSummit.png"',
    header: 'Present Your event to the world',
    techs: ['Html', 'Css', 'javascript'],
    live: 'https://chaabaneanas.github.io/Global-Summit-/',
    source: 'https://github.com/ChaabaneAnas/Global-Summit-',
    descrip:
      'The Leading Design Global Submit is a minimalist yet informative landing page that serves as a one-stop source of information about the event. The application was developed using HTML, CSS, and vanilla JavaScript, incorporating several engaging animations and a remarkable layout.  ',
  },
  {
    cTitle: 'Movie Streaming website PranMovies',
    cImg: 'src="./images/pranMovies.png" alt="ImagePholder"',
    cTechnologies: ['React', 'Css', 'javaScript', 'html'],
    cbutton: 'See Project',
    mImage: 'src="./images/PranMoviesPopup.png"  ',
    dImage: 'src="./images/PranMoviesPopup.png"',
    header: 'See Your Favorite Movie',
    techs: ['react', 'Webpack ', 'Jest', 'Redux'],
    live: 'https://promzzykoncepts.github.io/PranMovies/',
    source: 'https://github.com/ChaabaneAnas/PranMovies',
    descrip:
      'The application is an appealing web-based platform for movie streaming, featuring a vast collection of movies obtained through an API. In addition to the streaming capabilities, the app allows users to add reviews, likes, and comments. It was developed solely using vanilla javascript, HTML, and CSS, resulting in an exceptional layout and a range of outstanding functionalities.',
  },
  {
    cTitle: 'Fiche-de Linterlocuteur ',
    cImg: 'src="./images/Enr_agri.png" alt="ImagePholder"',
    cTechnologies: ['TypeScript', 'React', 'Css'],
    cbutton: 'See Project',
    mImage: 'src="./images/Enr_agri.png" alt=""',
    dImage: 'src="./images/Enr_agri.png"',
    header: 'Dynamic and interactive client interface',
    techs: ['TypeScript', 'React', 'Css'],
    live: 'enr-agri.netlify.app/',
    source: 'https://github.com/ChaabaneAnas/Fiche-de-L-interlocuteur',
    descrip:
      'Fiche-de-L-interlocuteur is a take-home assignment from a local company, it is a Custom Component based SPA and has serval features such as DoubleClick to edit and conditional graph rendering, the app is built to be scalable and Feature proof and ready to be integrated into a real word project',
  },
  {
    cTitle: 'React Country Metrics',
    cImg: 'src="./images/CountryMetrics.png" alt="ImagePholder"',
    cTechnologies: ['react', 'Redux', 'Css', 'javaScript'],
    cbutton: 'See Project',
    mImage: 'src="./images/CountryMetrics.png" alt=""',
    dImage: 'src="./images/CountryMetrics.png"',
    header: 'All the informaions you need about any country',
    techs: ['React ', 'Redux', 'Css', 'javascript'],
    live: 'https://countrymertics.netlify.app/',
    source: 'https://github.com/ChaabaneAnas/Country-Metrics',
    descrip:
      'A Simple mobile web app that provides all the information about every country in the world and can be filtered by Continent, this app is built using React/Redux, so it is hyper-fast and slik.',
  },
  {
    cTitle: 'Rails MoneyCast App',
    cImg: 'src="./images/Moneycast.png" alt="ImagePholder"',
    cTechnologies: ['Ruby on rails', 'Css', 'javaScript', 'html'],
    cbutton: 'See Project',
    mImage: 'src="./images/Moneycast.png" alt=""',
    dImage: 'src="./images/Moneycast.png"',
    header: 'Keeping track of hundreds of components',
    techs: ['Ruby on Rails', 'Css', 'javascript'],
    live: 'https://moneycast.onrender.com/',
    source: 'https://github.com/ChaabaneAnas/Budget_App',
    descrip:
      "MoneyCast is a full-stack mobile web app that helps the user keeps track of his spending; it's built using rail, a framework created at the top of ruby. The app is easy to use and has a simple UI, and is capable of performing all CRUD operations. Please live a star if you like it.",
  },
  {
    cTitle: 'Trek Bike Rental',
    cImg: 'src="./images/BikeRental.png" alt="ImagePholder"',
    cTechnologies: ['Ruby on rails', 'React', 'Redux', 'Css'],
    cbutton: 'See Project',
    mImage: 'src="./images/BikeRental.png" alt=""',
    dImage: 'src="./images/BikeRental.png" alt=""',
    header: 'Keeping track of hundreds of components',
    techs: ['Ruby on Rails', 'Css', 'javascript'],
    live: 'https://deploy-preview-31--rentbikes.netlify.app/',
    source: 'https://github.com/ChaabaneAnas/Bike-rental',
    descrip:
      'Trek Bike Rental is a full-stack web application that lets the user Creat delete, and reserve. It uses react/redux as a front-end framework, and an RoR builds API for the server side. The website also has multiple features, such as a night mode Color switching swiper and an attractive layout.',
  },
];

class Popup {
  static modal = document.querySelector('.modal');

  static overlay = document.querySelector('.overlay');

  static show(data, id) {
    Popup.modal.innerHTML = `
    <a class="clsbtn" href="#">×</a>
    <div class="imgs">
      <img class="dimg" ${data[id].dImage}>
      <img class="mimg" ${data[id].mImage}>
    </div>
    <div class="card-header">
      <h3 class="title">${data[id].header}</h3>
      <div class="buttons">
        <a class="live" href = ${data[id].live} target="_blank">See Live <img src="./images/seeliveicon.png" alt=""></a>
        <a class="source" href = ${data[id].source} target="_blank">See Source <img src="./images/Vector.png" alt=""></a>
      </div>
    </div>
    <ul class="tech">
      <li>${data[id].techs[0]}</li>
      <li>${data[id].techs[1]}</li>
      <li> ${data[id].techs[2]}</li>
    </ul>
    <p> ${data[id].descrip}</p>

`;
    Popup.modal.classList.add('active');
    Popup.overlay.classList.add('active');
  }

  static hide() {
    Popup.modal.classList.remove('active');
    Popup.overlay.classList.remove('active');
  }
}

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

const portfolios = document.querySelector('#works');
data.forEach((data, id) => {
  const innerProject = document.createElement('div');
  innerProject.classList.add('card');
  innerProject.innerHTML = `
      <img ${data.cImg}">
         <div>
            <p>${data.cTitle}</p>
            <ul>
              ${data.cTechnologies.map((item) => `<li> ${item} </li>`).join('')}
            </ul>
            <button class= "see_project"id="${id}" type="button">${
  data.cbutton
}</button>
         </div>
    `;
  portfolios.appendChild(innerProject);
});

const projectnBtn = document.querySelectorAll('.card button');
projectnBtn.forEach((btn) =>
  btn.addEventListener('click', (e) => Popup.show(data, e.target.id))
);
document.addEventListener('click', (e) => {
  if (!e.target.matches('.clsbtn')) {
    return;
  }
  Popup.hide();
});
document
  .querySelector('.overlay ')
  .addEventListener('click', () => Popup.hide());

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
