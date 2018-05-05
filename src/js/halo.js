import controls from './controls';

console.log('Halo hello!');

document.addEventListener('DOMContentLoaded', function(){ 

  var halo = document.querySelector('.halo-player');

  console.log(halo);
  console.log(controls);
  halo.appendChild(controls.playBtn);
});
