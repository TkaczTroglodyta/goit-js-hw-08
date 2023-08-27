import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = e => localStorage.setItem('TIME_KEY', e.seconds);
const currentTime = localStorage.getItem('TIME_KEY');

currentTime ? player.setCurrentTime(currentTime) : null;

player.on('timeupdate', throttle(onPlay, 1000));
