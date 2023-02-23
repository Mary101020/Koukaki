

//   window.addEventListener('scroll', function() {
//     var scrollPosition = window.scrollY;
//     var maxScrollPosition = document.documentElement.scrollHeight - window.innerHeight;
//     var scrollFraction = scrollPosition / maxScrollPosition;
//     var easingFunction = 'cubic-bezier(' + scrollFraction + ',0,' + (1 - scrollFraction) + ',1)';
//     document.styleSheets[0].rules[0].style.animationTimingFunction = easingFunction;
//   });


// window.addEventListener('scroll', function() {
//   var rotationDuration = 80 - window.pageYOffset/500; // adjust the division factor to change the speed of rotation
//   document.querySelector('.site-footer::after').style.animationDuration = rotationDuration + 's';
//   document.querySelector('.site-footer::before').style.animationDuration = rotationDuration + 's';
//   document.querySelector('.story h2::after').style.animationDuration = rotationDuration + 's';
//   document.querySelector('.story__article::after').style.animationDuration = rotationDuration + 's';
//   document.querySelector('#studio h2::before').style.animationDuration = rotationDuration + 's';
//   document.querySelector('#studio h2::after').style.animationDuration = rotationDuration + 's';
//   document.querySelector('.site-footer ul::after').style.animationDuration = rotationDuration + 's';
// });

let rotation = 0;
const rotationSpeed = 5;

function rotateElements() {
  rotation += rotationSpeed;
  const elements = document.querySelectorAll('.rotate');
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.transform = `rotate(${rotation}deg)`;
  }
  window.requestAnimationFrame(rotateElements);
}

window.requestAnimationFrame(rotateElements);