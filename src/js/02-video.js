import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {});

const play = ({ seconds }) => {
  try {
    localStorage.setItem('videoplayer-current-time', seconds);
  } catch (err) {
    console.log(err.name);
  }
};

player.on('timeupdate', throttle(play, 1000));

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(seconds => {
    console.log(`The current time is ${seconds} seconds.`);
  });
