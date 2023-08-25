// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';

// const TIME_KEY = 'videoplayer-current-time';

// const player = new Player('vimeo-player', {});

// const play = ({ seconds }) => {
//   try {
//     localStorage.setItem(TIME_KEY, seconds);
//   } catch (err) {
//     console.log(err.name);
//   }
// };

// player.on('timeupdate', throttle(play, 1000));

// player.setCurrentTime(localStorage.getItem(TIME_KEY)).then(seconds => {
//   console.log(`The current time is ${seconds} seconds.`);
// });

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {});

const play = function (data) {
  try {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  } catch (error) {
    console.log(error.name);
  }
};

player.on('timeupdate', throttle(play, 1000));

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {});
