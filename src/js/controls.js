var controlBar = '<div class="halo__control-bar"></div>';

var playBtn = document.createElement('div');
playBtn.className = 'halo__play-button';

playBtn.addEventListener('click', function () {console.log('click')});

const controls = {
  playBtn: playBtn
}

export default controls;