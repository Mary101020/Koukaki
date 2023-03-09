
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
    window.getComputedStyle(document.querySelector('.site-footer'), '::after'),
    window.getComputedStyle(document.querySelector('.site-footer'), '::before'),
    window.getComputedStyle(document.querySelector('.story h2'), '::after'),
    window.getComputedStyle(document.querySelector('.story__article'), '::after'),
    window.getComputedStyle(document.querySelector('#studio h2'), '::before'),
    window.getComputedStyle(document.querySelector('#studio h2'), '::after'),
    window.getComputedStyle(document.querySelector('.site-footer ul'), '::after')
  ];
  const myElementsWithPseudo = [...myElements, ...myPseudoElements];
  // console.log(myElementsWithPseudo);

  // Définir les durées maximale et minimale des animations (en secondes)
  const maxDuration = 25;
  const minDuration = 5;

  // Ajouter un écouteur d'événement à l'objet window pour suivre la position de défilement
  window.addEventListener('scroll', () => { 
    // Calculer la position de défilement actuelle par rapport à la hauteur totale du document
    const scrollPosition = (document.documentElement.scrollTop + window.innerHeight) / document.documentElement.scrollHeight;

   // Calculer la nouvelle durée de l'animation en fonction de la position de défilement
    const newDuration = minDuration + ((maxDuration - minDuration) * (1 - scrollPosition));

    // Mise à jour de la durée d'animation des éléments
    myElementsWithPseudo.forEach(element => {
      element.style.animationDuration = `${newDuration}s`;
    });
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
  bigCloud.style.left = -100 + scrollPercentage * 60 * 2 + 'px';
  littleCloud.style.left = -100 + scrollPercentage * 20 * 2 + 'px';
});

  /* -------------------------Le menu burger---------------------------------------- */


const menuToggle = document.querySelector('.menu-toggle');
const menuOverlay = document.querySelector('#menu-overlay');
const navigationMenu = document.querySelector('.main-navigation');
const siteHeader = document.querySelector('.site-header');
const siteLogo = document.querySelector('.site-logo');




menuToggle.addEventListener('click', () => {
  // Toggle active class on burger menu
  menuToggle.classList.toggle('active');

  // Toggle active class on navigation menu
  navigationMenu.classList.toggle('active');

  // Toggle active class on menu overlay
  menuOverlay.classList.toggle('active');

  siteHeader.classList.toggle('active');

  siteLogo.classList.toggle('active');




});


  function closeNav() {
    var menuOverlay = document.querySelector('#menu-overlay');
    var navigationMenu = document.querySelector('.main-navigation');

    // Remove active class from burger menu, menu overlay, and navigation menu
    document.querySelector('.menu-toggle').classList.remove('active');
    menuOverlay.classList.remove('active');
    navigationMenu.classList.remove('active');
    
  }

  



