export default function hero() {
  const section = document.createElement('section');
  section.classList.add('hero');

  const heroTitle = document.createElement('h1');
  const heroText = document.createTextNode('Lorem ipsum dolor');

  heroTitle.appendChild(heroText);
  heroTitle.classList.add('hero__title');

  section.append(heroTitle);
  return section;
}