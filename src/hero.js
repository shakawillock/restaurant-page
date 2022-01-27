export default function hero() {
  const section = document.createElement('section');
  section.classList.add('hero');

  const heroTitle = document.createElement('p');
  const heroText = document.createTextNode('Lorem ipsum dolor');

  const paragraph = document.createElement('p');
  const paragraphText = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit');

  heroTitle.appendChild(heroText);
  paragraph.appendChild(paragraphText);

  heroTitle.classList.add('hero__title');
  paragraph.classList.add('hero__text');


  section.append(heroTitle, paragraph);
  return section;
}