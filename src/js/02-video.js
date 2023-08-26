import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

let isAboutTime = localStorage.getItem(TIME_KEY);

const currentTime = e => {
  localStorage.setItem(TIME_KEY, e.seconds);
};

const getCurrentTime = e => {
  if (isAboutTime) {
    player.setCurrentTime(isAboutTime);
    player.off('play', getCurrentTime);
  }
  player.on('timeupdate', throttle(currentTime, 1000));
};

player.on('play', getCurrentTime);
console.log(`Video current time is ${isAboutTime} seconds.`);
