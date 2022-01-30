export default function contact() {
  const contact = document.createElement('section');
  const wrapper = document.createElement('div');
  const header = document.createElement('header');
  const title = document.createElement('h2');

  const info1 = document.createElement('div');
  const info2 = document.createElement('div');
  const info3 = document.createElement('div');

  const infoTitle1 = document.createElement('h3');
  const infoTitle2 = document.createElement('h3');
  const infoTitle3 = document.createElement('h3');

  const infoText1 = document.createElement('p');
  const infoText2 = document.createElement('p');
  const infoText3 = document.createElement('p');
  const infoText4 = document.createElement('p');
  const infoText5 = document.createElement('p');
  const infoText6 = document.createElement('p');
  const infoText7 = document.createElement('p');

  contact.classList.add('contact');
  wrapper.classList.add('contact__wrapper');
  header.classList.add('contact__header');
  title.classList.add('contact__header-title');

  info1.classList.add('contact__info');
  info2.classList.add('contact__info');
  info3.classList.add('contact__info');

  infoTitle1.classList.add('contact__info-title');
  infoTitle2.classList.add('contact__info-title');
  infoTitle3.classList.add('contact__info-title');

  infoText1.classList.add('contact__info-text');
  infoText2.classList.add('contact__info-text');
  infoText3.classList.add('contact__info-text');
  infoText4.classList.add('contact__info-text');
  infoText5.classList.add('contact__info-text');
  infoText6.classList.add('contact__info-text');
  infoText7.classList.add('contact__info-text');

  const mainTitle = document.createTextNode('Contact Us');
  const title1 = document.createTextNode('Location');
  const title2 = document.createTextNode('Hours');
  const title3 = document.createTextNode('Contact');

  const text1 = document.createTextNode('654 Geneva Street');
  const text2 = document.createTextNode('New York, NY');
  const text3 = document.createTextNode('Monday: Closed');
  const text4 = document.createTextNode('Tuesday - Friday: 11:00 am - 10:00 pm');
  const text5 = document.createTextNode('Saturday: 12:00 pm - 10:00 pm');
  const text6 = document.createTextNode('Sunday: 4:00 pm - 10:00 pm');
  const text7 = document.createTextNode('917-463-0785');

  title.appendChild(mainTitle);
  header.appendChild(title);

  infoTitle1.appendChild(title1);
  infoTitle2.appendChild(title2);
  infoTitle3.appendChild(title3);

  infoText1.appendChild(text1);
  infoText2.appendChild(text2);
  infoText3.appendChild(text3);
  infoText4.appendChild(text4);
  infoText5.appendChild(text5);
  infoText6.appendChild(text6);
  infoText7.appendChild(text7);

  info1.append(infoTitle1, infoText1, infoText2);
  info2.append(infoTitle2, infoText3, infoText4, infoText5, infoText6);
  info3.append(infoTitle3, infoText7);
  wrapper.append(info1, info2, info3);

  contact.append(title, wrapper);
  return contact;
}