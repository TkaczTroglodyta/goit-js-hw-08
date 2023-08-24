// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';

// const player = new Player('vimeo-player', {});

// const play = ({ seconds }) => {
//   try {
//     localStorage.setItem('videoplayer-current-time', seconds);
//   } catch (err) {
//     console.log(err.name);
//   }
// };

// player.on('timeupdate', throttle(play, 1000));

// player
//   .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
//   .then(seconds => {
//     console.log(`The current time is ${seconds} seconds.`);
//   });

import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEYCURRENTTIME = 'videoplayer-current-time';

let isTimeNow = localStorage.getItem(KEYCURRENTTIME);

function CurrentTime(e) {
  localStorage.setItem(KEYCURRENTTIME, e.seconds);
}

function getCurrentTime(e) {
  if (isTimeNow) {
    player.setCurrentTime(isTimeNow);
    player.off('play', getCurrentTime);
  }
  player.on('timeupdate', Throttle(CurrentTime, 1000));
}

player.on('play', getCurrentTime);
