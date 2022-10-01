import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

function createMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <div class="gallery__item">
     <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
     />
</div>`;
    })
    .join('');
}

gallery.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
gallery.addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
      <img src="${e.target.dataset.source}" width="800" height="600">
  `);

  instance.show();

  document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
}
