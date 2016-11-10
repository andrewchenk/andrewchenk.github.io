$(document).ready(function () {
  rainBeijing = new Howl({
    volume: 0.25,
    loop: true,
    src: ['./sound/rain-beijing.ogg']
  });

  rainNakano = new Howl({
    volume: 0.05,
    loop: true,
    src: ['./sound/rain-nakano.ogg']
  });

  rainEiko = new Howl({
    volume: 0.05,
    loop: true,
    src: ['./sound/rain-night-eiko-temple.ogg']
  });

  playBtn.style.display = 'none';
  pauseBtn.style.display = 'inline';

  $( "#playBtn" ).click(function() {
    rainBeijing.fade(0, 0.25, 1000)
    rainNakano.fade(0, 0.05, 1000)
    rainEiko.fade(0, 0.05, 1000)
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline';
  });


  $( "#pauseBtn" ).click(function() {
    rainBeijing.fade(0.25, 0, 1000)
    rainNakano.fade(0.05, 0, 1000)
    rainEiko.fade(0.05, 0, 1000)
    playBtn.style.display = 'inline';
    pauseBtn.style.display = 'none';
  });
  
  rainBeijing.play()
  rainNakano.play()
  rainEiko.play()
})
