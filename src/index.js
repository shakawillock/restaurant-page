import './styles.css';
import navigation from './navigation.js';
import hero from './hero.js';

const content = document.querySelector('#content');
content.append(navigation(), hero());