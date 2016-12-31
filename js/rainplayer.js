$(document).ready(function () {
    rain = new Howl({
        volume: 0.25,
        loop: true,
        src: ['./sound/rain-bjeknkn.ogg']
    });

    playBtn.style.display = 'inline';
    pauseBtn.style.display = 'none';

    $("#playBtn").click(function () {
        rain.play()
        rain.fade(0, 0.15, 1000)
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline';
    });


    $("#pauseBtn").click(function () {
        rain.fade(0.15, 0, 1000)
        playBtn.style.display = 'inline';
        pauseBtn.style.display = 'none';
    });



})