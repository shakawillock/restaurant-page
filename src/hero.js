export default function hero() {
  const section = document.createElement('section');
  const heroTitle = document.createElement('h1');

  section.classList.add('hero');
  heroTitle.classList.add('hero__title');
  
  const heroText = document.createTextNode('Lorem ipsum dolor');

  heroTitle.appendChild(heroText);
  section.append(heroTitle);
  
  return section;
}