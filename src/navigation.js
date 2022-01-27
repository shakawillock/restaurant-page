export default function navigation() {
  const header = document.createElement('header');
  const logo = document.createElement('h3');
  const logoText = document.createTextNode('Pizza Palace');
  
  logo.classList.add('logo');
  logo.append(logoText);
  header.classList.add('header');
  header.append(logo);

  const nav = document.createElement('nav');
  nav.classList.add('navbar');

  const ul = document.createElement('ul');
  ul.classList.add('navbar__items');

  const li1 = document.createElement('li');
  const liText1 = document.createTextNode('Home');
  const navLink1 = document.createElement('a');
  
  navLink1.setAttribute('href', '#');
  navLink1.classList.add('navbar__link');
  navLink1.appendChild(liText1);
  li1.classList.add('navbar__item');
  li1.appendChild(navLink1);

  const li2 = document.createElement('li');
  const liText2 = document.createTextNode('Menu');
  const navLink2 = document.createElement('a');

  navLink2.setAttribute('href', '#');
  navLink2.classList.add('navbar__link')
  navLink2.appendChild(liText2);
  li2.classList.add('navbar__item');
  li2.appendChild(navLink2);

  const li3 = document.createElement('li');
  const liText3 = document.createTextNode('Contact');
  const navLink3 = document.createElement('a');

  navLink3.setAttribute('href', '#');
  navLink3.classList.add('navbar__link')
  navLink3.appendChild(liText3);
  li3.classList.add('navbar__item');
  li3.appendChild(navLink3);

  ul.append(li1, li2, li3);
  nav.appendChild(ul);
  header.appendChild(nav);

  return header;
}