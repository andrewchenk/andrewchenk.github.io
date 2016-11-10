$(document).ready(function () {
  rain = new Howl({
    volume: 0.25,
    loop: true,
    src: ['./sound/rain-bjeknkn.ogg']
  });

  playBtn.style.display = 'none';
  pauseBtn.style.display = 'inline';

  $( "#playBtn" ).click(function() {
    rain.fade(0, 0.25, 1000)
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline';
  });


  $( "#pauseBtn" ).click(function() {
    rain.fade(0.25, 0, 1000)
    playBtn.style.display = 'inline';
    pauseBtn.style.display = 'none';
  });

  rain.play()
  rain.fade(0, rain.volume(), 500)

})
