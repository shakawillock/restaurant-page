export default function contact() {
  const contact = document.createElement('section');
  const header = document.createElement('header');
  const title = document.createElement('h2');

  const info1 = document.createElement('div');
  const info2 = document.createElement('div');
  const info3 = document.createElement('div');

  const infoTitle1 = document.createElement('h3');
  const infoTitle2 = document.createElement('h3');
  const infoTitle3 = document.createElement('h3');


  contact.classList.add('contact');
  header.classList.add('contact__header');
  title.classList.add('contact__header-title');

  const mainTitle = document.createTextNode('Contact Us');
  const title1 = document.createTextNode('Location');
  const title2 = document.createTextNode('Hours');
  const title3 = document.createTextNode('Contact');


  title.appendChild(mainTitle);
  header.appendChild(title);

  infoTitle1.appendChild(title1);
  infoTitle2.appendChild(title2);
  infoTitle3.appendChild(title3);



  return contact;
}