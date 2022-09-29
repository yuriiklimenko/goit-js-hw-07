import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

console.log(galleryItems);

for (const { preview, original, description } of galleryItems) {
  const item = document.createElement('div');
  const image = document.createElement('img');
  item.append(image);
  image.src = preview;
  image.alt = description;
  gallery.append(item);
}
