class AlbumsList {
  #url = null;

  #listOfAlbums = null;

  constructor(url) {
    this.#url = url;
    this.#listOfAlbums = document.querySelector('.list-group');
    this.#listOfAlbums.addEventListener('click', this.handleClick.bind(this));
  }

  loadListOfAlbums() {
    this.fetchAlbumsData().then((albums) => {
      albums.forEach((album) => {
        const singleAlbum = document.createElement('li');

        singleAlbum.setAttribute('id', `${album.id}`);
        singleAlbum.textContent = `${album.id}. ${album.title}`;
        singleAlbum.className = 'list-group-item';

        this.#listOfAlbums.appendChild(singleAlbum);
      });
    }).catch((error) => {
      throw new Error(`Error in promise chain: ${error}`);
    });
  }

  async fetchAlbumsData() {
    try {
      const response = await fetch(this.#url);
      const albums = await response.json();
      return albums;
    } catch (error) {
      throw new Error(`Error fetching albums: ${error}`);
    }
  }

  handleClick(e) {
    const albumId = e.target.id;
    if (albumId) {
      this.#listOfAlbums.removeEventListener('click', this.handleClick.bind(this));
      window.location.href = `./photos.html?albumId=${albumId}`;
    }
  }
}

const newAlbumsList = new AlbumsList('https://jsonplaceholder.typicode.com/albums');
newAlbumsList.loadListOfAlbums();
