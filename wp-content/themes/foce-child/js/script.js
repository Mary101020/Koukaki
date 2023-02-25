document.addEventListener('DOMContentLoaded', () => {
  // Select the elements to animate
  const elements = document.querySelectorAll('.site-footer::after, .site-footer:before, .story h2::after, .story__article::after, #studio h2::before, #studio h2::after, .site-footer ul::after');

  // Define the maximum and minimum animation durations (in seconds)
  const maxDuration = 25;
  const minDuration = 2;

  // Add an event listener to the window object to track the scroll position
  window.addEventListener('scroll', () => { 
    // Calculate the current scroll position relative to the total document height
    const scrollPosition = (document.documentElement.scrollTop + window.innerHeight) / document.documentElement.scrollHeight;
   
    // Calculate the new animation duration based on the scroll position
    const newDuration = minDuration + ((maxDuration - minDuration) * (1 - scrollPosition));

    // Update the animation duration for each element
    elements.forEach((element) => {
      element.style.animationDuration = `${newDuration}s !important`;

    });
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
      setTimeout(() => {
        entry.target.querySelector('.section-title span').classList.add('is-visible');
      }, 1000);
    }
  });
});

// Observer l'élément section
observer.observe(storySection);
observer.observe(studioSection);






