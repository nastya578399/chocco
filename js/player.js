let player;
const playerContainer = $('.video__player');

let eventsInit = () => {
    $('.player__start').click(e => {
        e.preventDefault();


        if(playerContainer.hasClass('paused')){
            player.pauseVideo();
        } else {
            player.playVideo();
        }
        
    });

    $(".duration__lenght").click(e => {
        const clikedPosition = parseInt(e.currentTarget.value);

        console.log(clikedPosition);

        player.seekTo(clikedPosition);
        
    });

    $(".video__player-img").click(e => {
        player.playVideo();
    })
}

const formatTime = timeSec => {
    const roundTime = Math.round(timeSec);
    const minutes = addZero(Math.floor(roundTime / 60));
    const seconds = addZero(roundTime - minutes * 60);

    function addZero(num){
        return num < 10 ? `0${num}` : num;
    }

    return `${minutes} : ${seconds}`;
}

const onPlayerReady = () => {
    let interval;
    const durationSec = player.getDuration();
    $(".duration__lenght").attr({ max: durationSec})
    $(".player__duration-ectimate").text(formatTime(durationSec));

    if (typeof interval !== 'undefined'){
        clearInterval(interval);
    }

    interval = setInterval(() => {
        const completedSec = player.getCurrentTime();
        $(".duration__length").val(
             `${completedSec}`
        );
        $(".player__duration-comleted").text(formatTime(completedSec));
    }, 1000);
}

const onPlayerStateChange = event => {
    /*
    -1 (воспроизведение видео не начато)
    0 (воспроизведение видео завершено)
    1 (воиспроизведение)
    2 (пауза)
    3 (буферизация)
    5 (видео падают реплики)
     */
    switch (event.data) {
        case 1:
            playerContainer.addClass("active");
            playerContainer.addClass("paused");
         break;
        case 2:
            playerContainer.removeClass("active");
            playerContainer.removeClass("paused");
            break;
        
    }
}
function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt-player', {
      height: '405',
      width: '100%',
      videoId: 'mVb4a7NuFF8',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      },
      playerVars:{
          controls: 0,
          disablekb:0,
          showinfo: 0,
          rel: 0,
          autoplay: 0,
          modestbranding: 0

      }
    });
  }

   
   eventsInit();

