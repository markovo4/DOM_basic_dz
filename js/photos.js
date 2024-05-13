class Gallery {
  #div = null;

  constructor() {
    this.#div = document.querySelector('.d-flex');
  }

  get getDiv() {
    return this.#div;
  }

  async logPhotos() {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos${window.location.search}`);
      const photos = await response.json();
      return photos;
    } catch (error) {
      throw new Error(`Error fetching photos: ${error}`);
    }
  }
}

const newGallery = new Gallery();
const div = newGallery.getDiv;
newGallery.logPhotos().then((photos) => {
  photos.forEach((photo) => {
    const img = document.createElement('img');
    img.className = 'flex-grow-1';
    img.src = photo.thumbnailUrl;
    div.appendChild(img);
  });
});
