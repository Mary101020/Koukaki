
//--------------- Déclencher une rotation plus rapide des fleurs lors du défilement

document.addEventListener('DOMContentLoaded', () => {
  // Select the elements to animate
  const myElement = document.querySelector('.site-footer');
  const myPseudoElement = window.getComputedStyle(myElement, ':after');
  console.log(myPseudoElement);

  // Define the maximum and minimum animation durations (in seconds)
  const maxDuration = 25;
  const minDuration = 2;

  // Add an event listener to the window object to track the scroll position
  window.addEventListener('scroll', () => { 
    // Calculate the current scroll position relative to the total document height
    const scrollPosition = (document.documentElement.scrollTop + window.innerHeight) / document.documentElement.scrollHeight;

    // Calculate the new animation duration based on the scroll position
    const newDuration = minDuration + ((maxDuration - minDuration) * (1 - scrollPosition));

    // Update the animation duration for the element
    myElement.style.animationDuration = `${newDuration}s`;
  });
});






// L'apparence des titres lors de la consultation de la section

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



// Calcul du mouvement et du positionnement des nuages
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






