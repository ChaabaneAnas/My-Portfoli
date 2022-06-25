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
  cTitle:'Multi-Post Stories Gain+Glory',
  cImg:'src="images/ImgPlaholder.png" alt="ImagePholder"',
  cTechnologies:['Ruby on rails','css','javaScript','html'],
  cbutton :'See Project',
  mImage: 'src="images/SnapshootPortfolio.png" alt="" class="img"',
  dImage: 'src="images/SnapshootdPortfolio.png"',
  header: 'Keeping track of hundreds of components',
  techs: ['Ruby on Rails', 'css', 'javascript'],
  live: 'href = "https://chaabaneanas.github.io/PortfolioSetup_Mobile-Version-Setup/"',
  source: 'href = "#"',
  descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
},
{
  cTitle:'Multi-Post Stories Gain+Glory',
  cImg:'src="images/ImgPlaholder.png" alt="ImagePholder"',
  cTechnologies:['Ruby on rails','css','javaScript','html'],
  cbutton :'See Project',
  mImage: 'src="images/SnapshootPortfolio.png" alt="" class="img"',
  dImage: 'src="images/SnapshootdPortfolio.png"',
  header: 'Keeping track of hundreds of components',
  techs: ['Ruby on Rails', 'css', 'javascript'],
  live: 'href = "https://chaabaneanas.github.io/PortfolioSetup_Mobile-Version-Setup/"',
  source: 'href = "#"',
  descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
},
{
  cTitle:'Multi-Post Stories Gain+Glory',
  cImg:'src="images/ImgPlaholder.png" alt="ImagePholder"',
  cTechnologies:['Ruby on rails','css','javaScript','html'],
  cbutton :'See Project',
  mImage: 'src="images/SnapshootPortfolio.png" alt="" class="img"',
  dImage: 'src="images/SnapshootdPortfolio.png"',
  header: 'Keeping track of hundreds of components',
  techs: ['Ruby on Rails', 'css', 'javascript'],
  live: 'href = "https://chaabaneanas.github.io/PortfolioSetup_Mobile-Version-Setup/"',
  source: 'href = "#"',
  descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
},
{
  cTitle:'Multi-Post Stories Gain+Glory',
  cImg:'src="images/ImgPlaholder.png" alt="ImagePholder"',
  cTechnologies:['Ruby on rails','css','javaScript','html'],
  cbutton :'See Project',
  mImage: 'src="images/SnapshootPortfolio.png" alt="" class="img"',
  dImage: 'src="images/SnapshootdPortfolio.png"',
  header: 'Keeping track of hundreds of components',
  techs: ['Ruby on Rails', 'css', 'javascript'],
  live: 'href = "https://chaabaneanas.github.io/PortfolioSetup_Mobile-Version-Setup/"',
  source: 'href = "#"',
  descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
},
{
  cTitle:'Multi-Post Stories Gain+Glory',
  cImg:'src="images/ImgPlaholder.png" alt="ImagePholder"',
  cTechnologies:['Ruby on rails','css','javaScript','html'],
  cbutton :'See Project',
  mImage: 'src="images/SnapshootPortfolio.png" alt="" class="img"',
  dImage: 'src="images/SnapshootdPortfolio.png"',
  header: 'Keeping track of hundreds of components',
  techs: ['Ruby on Rails', 'css', 'javascript'],
  live: 'href = "https://chaabaneanas.github.io/PortfolioSetup_Mobile-Version-Setup/"',
  source: 'href = "#"',
  descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
},
{
  cTitle:'Multi-Post Stories Gain+Glory',
  cImg:'src="images/ImgPlaholder.png" alt="ImagePholder"',
  cTechnologies:['Ruby on rails','css','javaScript','html'],
  cbutton :'See Project',
  mImage: 'src="images/SnapshootPortfolio.png" alt="" class="img"',
  dImage: 'src="images/SnapshootdPortfolio.png"',
  header: 'Keeping track of hundreds of components',
  techs: ['Ruby on Rails', 'css', 'javascript'],
  live: 'href = "https://chaabaneanas.github.io/PortfolioSetup_Mobile-Version-Setup/"',
  source: 'href = "#"',
  descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
}]

const portfolios = document.querySelector('#works');
data.forEach((data, id) => {
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
            <button type="button">${data.cbutton}</button>
         </div>
    `);
  portfolios.appendChild(innerProject);
});
const body = document.querySelector('body')
const popup = document.querySelector('.overlay')
const popupCont = document.createElement('div');
popupCont.innerHTML = (`
     <div class="imgs">
            <img class="mimg" src="images/SnapshootPortfolio.png" alt="">
            <img class="dimg" src="images/SnapshootdPortfolio.png">
            <a id="clsbtn" href="#">×</a>
            </div>
            <h3 class="title">Keeping track of hundreds of components</h3>
            <ul class="tech">
              <li>Ruby on rails</li>
              <li>css</li>
              <li> JavScript</li>
            </ul>
            <p class="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
       <div class="buttons">
          <a class="live" href="https://chaabaneanas.github.io/PortfolioSetup_Mobile-Version-Setup/">See Live <img src="/images/seeliveicon.png" alt=""></a>
          <a class="source" href="#">See Source <img src="/images/Vector.png" alt=""></a>
          </div>
  `)
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
projectnBtn.forEach((btn) => btn.addEventListener('click', () => {
  projectPopup();
}));
document.querySelector('#clsbtn').addEventListener('click', (clsbtn) => clsIt(clsbtn));
