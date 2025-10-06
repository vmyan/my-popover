import Popover from './popover';
import './style.css';

const button = document.createElement('button');
button.textContent = 'Click to toggle popover';
document.body.appendChild(button);

// eslint-disable-next-line no-unused-vars
const popover = new Popover(
  button,
  'Popover title',
  "And here's some amazing content. It's very engaging. Right?",
);
