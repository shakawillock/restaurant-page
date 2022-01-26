export default function hero() {
  const section = document.createElement('section');
  section.classList.add('hero');

  const paragraph = document.createElement('p');
  const paragraphText = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');

  paragraph.classList.add('hero__text');
  paragraph.appendChild(paragraphText);

  section.append(paragraph);
  return section;
}