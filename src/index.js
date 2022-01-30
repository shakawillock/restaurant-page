import './styles.css';
import navigation from './navigation.js';
import hero from './hero.js';
import menu from './menu.js';
import contact from './contact.js';

const content = document.querySelector('#content');
content.append(navigation(), hero());

const homeTab = document.querySelectorAll('.navbar__item')[0];
const menuTab = document.querySelectorAll('.navbar__item')[1];
const contactTab = document.querySelectorAll('.navbar__item')[2];

homeTab.addEventListener('click', () => {
  removeChildElement();
  content.append(hero());
});

menuTab.addEventListener('click', () => {
  removeChildElement();
  content.append(menu());
});

contactTab.addEventListener('click', () => {
  removeChildElement();
  content.append(contact());
});

function removeChildElement() {
  content.removeChild(content.children[1]);
}