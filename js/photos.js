class Gallery {
  #listOfPhotos = null;

  constructor() {
    this.#listOfPhotos = document.querySelector('.d-flex');
  }

  loadListOfPhotos() {
    this.fetchPhotosData().then((photos) => {
      photos.forEach((photo) => {
        const photoItem = document.createElement('img');
        photoItem.className = 'flex-grow-1';
        photoItem.src = photo.thumbnailUrl;
        this.#listOfPhotos.appendChild(photoItem);
      });
    });
  }

  async fetchPhotosData() {
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
newGallery.loadListOfPhotos();
