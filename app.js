const data = [
  {
    cTitle: "Leading Design Global Summit",
    cImg: 'src="./images/GlobalSummit.png" alt="ImagePholder"',
    cTechnologies: ["css", "javaScript", "html"],
    cbutton: "See Project",
    mImage: 'src="./images/GlobalSummit.png" alt="" ',
    dImage: 'src="./images/GlobalSummit.png"',
    header: "Present Your event to the world",
    techs: ["Html", "css", "javascript"],
    live: "https://chaabaneanas.github.io/Global-Summit-/",
    source: "https://github.com/ChaabaneAnas/Global-Summit-",
    descrip:
      "Leading Design Global Submit is a simple Landing page that provides all informations about the event, the app was built with html css and vanilla javascript it still has som cool animations and an outstanding layout  ",
  },
  {
    cTitle: "Movie Streaming website PranMovies",
    cImg: 'src="./images/pranMovies.png" alt="ImagePholder"',
    cTechnologies: ["React", "css", "javaScript", "html"],
    cbutton: "See Project",
    mImage: 'src="./images/PranMoviesPopup.png"  ',
    dImage: 'src="./images/PranMoviesPopup.png"',
    header: "See Your Favorite Movie",
    techs: ["react", "Webpack ", "Jest", "Redux"],
    live: "https://promzzykoncepts.github.io/PranMovies/",
    source: "https://github.com/ChaabaneAnas/PranMovies",
    descrip:
      "A attractive Movie Streaming web app that displays movies from an Api and lets a user add reviews, likes and comment, the app is built using only vanilla javascript html and css, it also has and outstanding layout and a cool some cool functilaity's",
  },
  {
    cTitle: "Web Calculator MAth Magician",
    cImg: 'src="./images/MathMagician.png" alt="ImagePholder"',
    cTechnologies: ["css", "javaScript", "html"],
    cbutton: "See Project",
    mImage: 'src="./images/MathMagician.png" alt=""',
    dImage: 'src="./images/MathMagician.png"',
    header: "Performe Your math operation on the web",
    techs: ["React", "Redux", "css", "javascript"],
    live: "https://6325ae11fcbd02398dda82b3--math-magicians-react001.netlify.app/",
    source: "https://github.com/ChaabaneAnas/Math-Magicians",
    descrip:
      "A Simple yet powerful web app, that allow the user to perform Simple math operation right on your browser,the app is simple to accsess use and has a pretty layout ,",
  },
  {
    cTitle: "React Country Metrics",
    cImg: 'src="./images/CountryMetrics(1).png" alt="ImagePholder"',
    cTechnologies: ["react", "Redux", "css", "javaScript"],
    cbutton: "See Project",
    mImage: 'src="./images/CountryMetricsDektop.png" alt=""',
    dImage: 'src="./images/CountryMetrics.png"',
    header: "All the informaions you need about any country",
    techs: ["React ", "Redux", "css", "javascript"],
    live: "https://countrymertics.netlify.app/",
    source: "https://github.com/ChaabaneAnas/Country-Metrics",
    descrip:
      "A Simple mobile web app that provides all the  information's about every country in the world, and could be filtered by Continent,this app is built using React/Redux so it is hyper fast and slik ",
  },
  {
    cTitle: "Rails MoneyCast App",
    cImg: 'src="./images/Moneycasttrimed.png" alt="ImagePholder"',
    cTechnologies: ["Ruby on rails", "css", "javaScript", "html"],
    cbutton: "See Project",
    mImage: 'src="./images/Moneycasttrimed.png" alt=""',
    dImage: 'src="./images/Moneycasttrimed.png"',
    header: "Keeping track of hundreds of components",
    techs: ["Ruby on Rails", "css", "javascript"],
    live: "https://moneycast.onrender.com/",
    source: "https://github.com/ChaabaneAnas/Budget_App",
    descrip:
      "MoneyCast is fullstack mobile web app that helps the user keeps track of his spendings, it's built using rail a framework built in top of ruby the app is easy to use and has a simple ui and capable of performing all CRUD operations please live a star if you like it",
  },
  {
    cTitle: "Trek Bike Rental",
    cImg: 'src="./images/BikeRental.png" alt="ImagePholder"',
    cTechnologies: ["Ruby on rails", "React", "Redux", "css"],
    cbutton: "See Project",
    mImage: 'src="./images/BikeRental.png" alt=""',
    dImage: 'src="./images/BikeRental.png" alt=""',
    header: "Keeping track of hundreds of components",
    techs: ["Ruby on Rails", "css", "javascript"],
    live: "https://deploy-preview-31--rentbikes.netlify.app/",
    source: "https://github.com/ChaabaneAnas/Bike-rental",
    descrip:
      "Trek Bike Rental is a full stack web application that let's the use Creat delete and reserve it uses react/redux as front end frameworks and a RoR build api for the server side the web site is also has multiple features such as night mode Color switching swiper and a attractive layout.",
  },
];

class Popup {
  static modal = document.querySelector(".modal");

  static overlay = document.querySelector(".overlay");

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
        <a class="live" href = ${data[id].live}>See Live <img src="./images/seeliveicon.png" alt=""></a>
        <a class="source" href = ${data[id].source}>See Source <img src="./images/Vector.png" alt=""></a>
      </div>
    </div>
    <ul class="tech">
      <li>${data[id].techs[0]}</li>
      <li>${data[id].techs[1]}</li>
      <li> ${data[id].techs[2]}</li>
    </ul>
    <p> ${data[id].descrip}</p>

`;
    Popup.modal.classList.add("active");
    Popup.overlay.classList.add("active");
  }

  static hide() {
    Popup.modal.classList.remove("active");
    Popup.overlay.classList.remove("active");
  }
}

const humb = document.querySelector(".humb");
const navMenu = document.querySelector(".nav");
const closeBtn = document.querySelector(".closebtn");
const menuElement = document.querySelector(".navL");

function active() {
  navMenu.classList.add("active");
}
function uActive() {
  navMenu.classList.remove("active");
}

humb.addEventListener("click", active);
closeBtn.addEventListener("click", uActive);
menuElement.addEventListener("click", uActive);

const portfolios = document.querySelector("#works");
data.forEach((data, id) => {
  const innerProject = document.createElement("div");
  innerProject.classList.add("card");
  innerProject.innerHTML = `
      <img ${data.cImg}">
         <div>
            <p>${data.cTitle}</p>
            <ul>
               <li>${data.cTechnologies[0]}</li>
               <li>${data.cTechnologies[1]}</li>
               <li>${data.cTechnologies[2]}</li>
               <li>${data.cTechnologies[3]}</li>
            </ul>
            <button class= "see_project"id="${id}" type="button">${data.cbutton}</button>
         </div>
    `;
  portfolios.appendChild(innerProject);
});

const projectnBtn = document.querySelectorAll(".card button");
projectnBtn.forEach((btn) =>
  btn.addEventListener("click", (e) => Popup.show(data, e.target.id))
);
document.addEventListener("click", (e) => {
  if (!e.target.matches(".clsbtn")) {
    return;
  }
  Popup.hide();
});
document
  .querySelector(".overlay ")
  .addEventListener("click", () => Popup.hide());

const form = document.getElementById("form");
const [username, email, message] = form.elements;

if (!localStorage.getItem("form-data")) {
  const data = { usernameValue: "", emailValue: "", messageValue: "" };
  localStorage.setItem("form-data", JSON.stringify(data));
}

const setDataInBrowser = (element, elementValue) => {
  element.addEventListener("change", () => {
    const retrivedData = JSON.parse(localStorage.getItem("form-data"));
    retrivedData[elementValue] = element.value;
    localStorage.setItem("form-data", JSON.stringify(retrivedData));
  });
};

const setDataInFormFields = (element, elementValue) => {
  element.value = elementValue;
};

document.addEventListener("DOMContentLoaded", () => {
  // set form fields data in the local storage of the browser.
  setDataInBrowser(username, "usernameValue");
  setDataInBrowser(email, "emailValue");
  setDataInBrowser(message, "messageValue");
  // load form previous data from storage and set them in form field
  const data = JSON.parse(localStorage.getItem("form-data"));
  setDataInFormFields(username, data.usernameValue);
  setDataInFormFields(email, data.emailValue);
  setDataInFormFields(message, data.messageValue);
});
