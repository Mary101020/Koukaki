
/* --------------Déclencher une rotation plus rapide des fleurs lors du défilement------------- */


document.addEventListener('DOMContentLoaded', () => {
  // Sélectionner les éléments à animer
  const myElements = [
    document.querySelector('.site-footer'),
    document.querySelector('.story h2'),
    document.querySelector('.story__article'),
    document.querySelector('#studio h2'),
    document.querySelector('.site-footer ul'),
  ];
  const myPseudoElements = [
    document.querySelector('.site-footer::after'),
    document.querySelector('.site-footer::before'),
    document.querySelector('.story h2::after'),
    document.querySelector('.story__article::after'),
    document.querySelector('#studio h2::before'),
    document.querySelector('#studio h2::after'),
    document.querySelector('.site-footer ul::after')
  ];
  const myElementsWithPseudo = [...myElements, ...myPseudoElements].filter(element => element !== null && element !== undefined);


  // Définir les durées maximale et minimale des animations (en secondes)
  const maxDuration = 25;
  const minDuration = 5;

  // Ajouter un écouteur d'événement à l'objet window pour suivre la position de défilement
  window.addEventListener('scroll', () => {
    // Calculer la position de défilement actuelle par rapport à la hauteur totale du document
    const scrollPosition = (document.documentElement.scrollTop + window.innerHeight) / document.documentElement.scrollHeight;

    // Calculer la nouvelle durée de l'animation en fonction de la position de défilement
    const newDuration = minDuration + ((maxDuration - minDuration) * (0.5 - scrollPosition));

    document.documentElement.style.setProperty('--animeDur', `${newDuration}s`);


  });
});






/* --------------L'apparence des titres lors de la consultation de la section------------- */


// Sélectionner l'élément de section en fonction de l'ID et de l'élément span dans le titre de la section
const storySection = document.getElementById('story');
const studioSection = document.getElementById('studio');
const storySpan = document.querySelector('#story .section-title span');
const studioSpan = document.querySelector('#studio .section-title span');

// Crée un IntersectionObserver qui se déclenche lorsque la section est en vue
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.querySelector('.section-title span').classList.add('is-visible');
      }, 1000);
    }
  });
});

// Observer l'élément section
observer.observe(storySection);
observer.observe(studioSection);


/* --------------Calcul du mouvement et du positionnement des nuages------------- */

const clouds = document.querySelector('.clouds');
const bigCloud = document.querySelector('.big-cloud');
const littleCloud = document.querySelector('.little-cloud');
const sectionHeight = document.querySelector('#place').offsetHeight;

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const scrollPercentage = scrollPosition / sectionHeight;
  bigCloud.style.left = -300 + scrollPercentage * 30 * 3 + 'px';
  littleCloud.style.left = -300 + scrollPercentage * 10 * 3 + 'px';
});

/* -------------------------Le menu burger---------------------------------------- */

const menuToggle = document.querySelector('.menu-toggle');
const menuOverlay = document.querySelector('#menu-overlay');
const navigationMenu = document.querySelector('.main-navigation');
const siteHeader = document.querySelector('.site-header');
const siteLogo = document.querySelector('.site-logo');

menuToggle.addEventListener('click', () => {
  // Bascule la classe active sur le menu burger
  menuToggle.classList.toggle('active');

  // Bascule la classe active dans le menu de navigation
  navigationMenu.classList.toggle('active');

  // Bascule la classe active sur le menuOverlay
  menuOverlay.classList.toggle('active');

  siteHeader.classList.toggle('active');
  siteHeader.classList.toggle('activate');

  siteLogo.classList.toggle('active');
  siteLogo.classList.toggle('activate');
});

function closeNav() {
  var menuOverlay = document.querySelector('#menu-overlay');
  var navigationMenu = document.querySelector('.main-navigation');
  const siteHeader = document.querySelector('.site-header');
  const siteLogo = document.querySelector('.site-logo');

  // Supprime la classe active du menu burger, du menu superposé et du menu de navigation
  document.querySelector('.menu-toggle').classList.remove('active');
  menuOverlay.classList.remove('active');
  navigationMenu.classList.remove('active');
  siteHeader.classList.remove('active');
  siteHeader.classList.remove('activate');
  siteLogo.classList.remove('active');
  siteLogo.classList.remove('activate');
}

/* -------------------------Swiper script------------------------------------ */

var coverflowSwiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  speed: 2000,
});












