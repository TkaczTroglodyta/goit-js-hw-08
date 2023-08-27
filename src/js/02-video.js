// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';

// const TIME_KEY = 'videoplayer-current-time';

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);

// let isAboutTime = localStorage.getItem(TIME_KEY);

// const currentTime = e => {
//   localStorage.setItem(TIME_KEY, e.seconds);
// };

// const getCurrentTime = e => {
//   if (isAboutTime) {
//     player.setCurrentTime(isAboutTime);
//     player.off('play', getCurrentTime);
//   }
//   player.on('timeupdate', throttle(currentTime, 1000));
// };

// player.on('play', getCurrentTime);
// console.log(`Video current time is ${isAboutTime} seconds.`);

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIME_KEY = 'videoplayer-current-time';

const player = new Player('vimeo-player', {});

const play = ({ seconds }) => {
  try {
    localStorage.setItem(TIME_KEY, seconds);
  } catch (err) {
    console.log(err.name);
  }
};

player.on('timeupdate', throttle(play, 1000));

player.setCurrentTime(localStorage.getItem(TIME_KEY)).then(seconds => {
  console.log(`The current time is ${seconds} seconds.`);
});
