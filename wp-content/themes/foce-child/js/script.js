
const elements = document.querySelectorAll('.site-footer::after, .site-footer:before, .story h2::after, .story__article::after, #studio h2::before, #studio h2::after, .site-footer ul::after');

// Définir les valeurs de durée d'animation maximale et minimale
const maxDuration = 50;
const minDuration = 2;

// Ajouter un écouteur d'événement à l'objet fenêtre pour suivre la position de défilement
window.addEventListener('scroll', () => {
  // Calculer la position de défilement actuelle par rapport à la hauteur totale du document
  const scrollPosition = (document.documentElement.scrollTop + window.innerHeight) / document.documentElement.offsetHeight;

 // Calcule la nouvelle durée de l'animation en fonction de la position de défilement
  const newDuration = maxDuration - ((maxDuration - minDuration) * scrollPosition);

// Mise à jour de la durée de l'animation pour chaque élément
  elements.forEach((element) => {
    element.style.animationDuration = `${newDuration}s`;
  });
});







// Sélectionner l'élément de section en fonction de l'ID et de l'élément span dans le titre de la section
const storySection = document.getElementById('story');
const studioSection = document.getElementById('studio');
const storySpan = document.querySelector('#story .section-title span');
const studioSpan = document.querySelector('#studio .section-title span');

// Crée un IntersectionObserver qui se déclenche lorsque la section est en vue
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target === storySection) {
        setTimeout(() => {
          storySpan.classList.add('is-visible');
        }, 1000); // Delay the appearance of storySpan by 1 second
      } else if (entry.target === studioSection) {
        setTimeout(() => {
          studioSpan.classList.add('is-visible');
        }, 1000); // Delay the appearance of studioSpan by 1 second
      }
    }
  });
});

// Observer l'élément section
observer.observe(storySection);
observer.observe(studioSection);
