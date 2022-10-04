import { galleryItems } from './gallery-items.js';

// Change code below this line
const gallery = document.querySelector('.gallery');

const makeMarkup = galleryItems => {
  return galleryItems.map(({ preview, original, description }) => {
    const item = document.createElement('div');
    const link = document.createElement('a');
    const image = document.createElement('img');
    link.append(image);
    item.append(link);
    item.classList.add('gallery__item');
    link.classList.add('gallery__link');
    image.classList.add('gallery__image');
    link.href = original;
    image.src = preview;
    image.setAttribute('data-source', original);
    image.alt = description;
    return item;
  });
};

gallery.append(...makeMarkup(galleryItems));
gallery.addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const closeOnEsc = e => {
    if (e.code === 'Escape') {
      instance.close();
    }
  };

  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => {
        document.addEventListener('keydown', closeOnEsc);
      },
      onClose: () => {
        document.removeEventListener('keydown', closeOnEsc);
      },
    }
  );

  instance.show();
}
