$(document).ready(function () {
    rain = new Howl({
        loop: true,
        src: ['./sound/rain-bjeknkn.ogg']
    });
    var rain1;

    playBtn.style.display = 'inline';
    pauseBtn.style.display = 'none';

    $("#playBtn").click(function () {

        rain1 = rain.play()
        rain.fade(0, 0.09, 1000, rain1);
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline';
    });


    $("#pauseBtn").click(function () {
        rain.fade(0.09, 0, 1000, rain1);
        if (rain.volume() == 0) {
            rain1 = rain.pause();
          }
        playBtn.style.display = 'inline';
        pauseBtn.style.display = 'none';
    });



})
