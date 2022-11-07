import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

player.on('timeupdate', throttle(playbackTimeRecording, 1000));

function playbackTimeRecording(data) { 
    localStorage.setItem('videoplayer-current-time', data.seconds);
}

player.setColor('#ef0000');

player.on('play', function() {
    console.log('played the video!');
});