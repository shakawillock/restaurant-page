export default function menu() {
  const menu = document.createElement('section');
  const header = document.createElement('header');
  const title = document.createElement('h2');

  const menuItems = document.createElement('div');
  const menuItem1 = document.createElement('div');
  const menuItem2 = document.createElement('div');
  const menuItem3 = document.createElement('div');
  const menuItem4 = document.createElement('div');

  const menuItemTitle1 = document.createElement('h3');
  const menuItemTitle2 = document.createElement('h3');
  const menuItemTitle3 = document.createElement('h3');
  const menuItemTitle4 = document.createElement('h3');

  const menuItemText1 = document.createElement('p');
  const menuItemText2 = document.createElement('p');
  const menuItemText3 = document.createElement('p');
  const menuItemText4 = document.createElement('p');

  const menuItemPrice1 = document.createElement('p');
  const menuItemPrice2 = document.createElement('p');
  const menuItemPrice3 = document.createElement('p');
  const menuItemPrice4 = document.createElement('p');

  menu.classList.add('menu');
  header.classList.add('menu__header');
  title.classList.add('menu__header-title');

  menuItems.classList.add('menu__items');
  menuItem1.classList.add('menu__item');
  menuItem2.classList.add('menu__item');
  menuItem3.classList.add('menu__item');
  menuItem4.classList.add('menu__item');

  menuItemTitle1.classList.add('menu__item-title');
  menuItemTitle2.classList.add('menu__item-title');
  menuItemTitle3.classList.add('menu__item-title');
  menuItemTitle4.classList.add('menu__item-title');

  menuItemText1.classList.add('menu__item-description');
  menuItemText2.classList.add('menu__item-description');
  menuItemText3.classList.add('menu__item-description');
  menuItemText4.classList.add('menu__item-description');

  menuItemPrice1.classList.add('menu__item-price');
  menuItemPrice2.classList.add('menu__item-price');
  menuItemPrice3.classList.add('menu__item-price');
  menuItemPrice4.classList.add('menu__item-price');

  const mainTitle = document.createTextNode('Menu');
  const title1 = document.createTextNode('Pepperoni Pizza');
  const title2 = document.createTextNode('Sausage Pizza');
  const title3 = document.createTextNode('BBQ Chicken Pizza');
  const title4 = document.createTextNode('Cheese Pizza');

  const text1 = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id iaculis quam, et aliquet.');
  const text2 = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id iaculis quam, et aliquet.');
  const text3 = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id iaculis quam, et aliquet.');
  const text4 = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id iaculis quam, et aliquet.');

  const price1 = document.createTextNode('$20');
  const price2 = document.createTextNode('$20');
  const price3 = document.createTextNode('$20');
  const price4 = document.createTextNode('$20');

  title.appendChild(mainTitle);
  header.appendChild(title);
  menuItemTitle1.appendChild(title1);
  menuItemTitle2.appendChild(title2);
  menuItemTitle3.appendChild(title3);
  menuItemTitle4.appendChild(title4);

  menuItemText1.appendChild(text1);
  menuItemText2.appendChild(text2);
  menuItemText3.appendChild(text3);
  menuItemText4.appendChild(text4);

  menuItemPrice1.append(price1);
  menuItemPrice2.append(price2);
  menuItemPrice3.append(price3);
  menuItemPrice4.append(price4);

  menuItem1.append(menuItemTitle1, menuItemText1, menuItemPrice1);
  menuItem2.append(menuItemTitle2, menuItemText2, menuItemPrice2);
  menuItem3.append(menuItemTitle3, menuItemText3, menuItemPrice3);
  menuItem4.append(menuItemTitle4, menuItemText4, menuItemPrice4);

  menu.append(header, menuItem1, menuItem2, menuItem3, menuItem4);
  return menu;
}