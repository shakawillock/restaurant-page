export default function navigation() {
  const header = document.createElement('header');
  const logo = document.createElement('h3');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');

  const navLink1 = document.createElement('a');
  const navLink2 = document.createElement('a');
  const navLink3 = document.createElement('a');

  navLink1.setAttribute('href', '#');
  navLink2.setAttribute('href', '#');
  navLink3.setAttribute('href', '#');

  const logoText = document.createTextNode('Pizza Palace');
  const liText1 = document.createTextNode('Home');
  const liText2 = document.createTextNode('Menu');
  const liText3 = document.createTextNode('Contact');

  header.classList.add('header');
  logo.classList.add('logo');
  nav.classList.add('navbar');
  ul.classList.add('navbar__items');

  li1.classList.add('navbar__item');
  li2.classList.add('navbar__item');
  li3.classList.add('navbar__item');
  
  navLink1.classList.add('navbar__link');
  navLink2.classList.add('navbar__link');
  navLink3.classList.add('navbar__link');

  logo.appendChild(logoText);
  ul.append(li1, li2, li3);
  nav.appendChild(ul);
  header.append(logo, nav);
  
  li1.appendChild(navLink1);
  li2.appendChild(navLink2);
  li3.appendChild(navLink3);

  navLink1.appendChild(liText1);
  navLink2.appendChild(liText2);
  navLink3.appendChild(liText3);

  return header;
}