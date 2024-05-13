class Album {
  #req = null;

  #ul = null;

  constructor(req) {
    this.#req = req;
    this.#ul = document.querySelector('.list-group');
    this.#ul.addEventListener('click', this.handleClick.bind(this));
  }

  get getUl() {
    return this.#ul;
  }

  async logAlbum() {
    try {
      const response = await fetch(this.#req);
      const albums = await response.json();
      return albums;
    } catch (error) {
      throw new Error(`Error fetching albums: ${error}`);
    }
  }

  handleClick(e) {
    const albumId = e.target.id;
    if (albumId) {
      window.location.href = `./photos.html?albumId=${albumId}`;
    }
  }
}

const newAlbum = new Album('https://jsonplaceholder.typicode.com/albums');
const ul = newAlbum.getUl;
newAlbum.logAlbum().then((albums) => {
  albums.forEach((album) => {
    const li = document.createElement('li');

    li.setAttribute('id', `${album.id}`);
    li.textContent = `${album.id}. ${album.title}`;
    li.className = 'list-group-item';

    ul.appendChild(li);
  });
}).catch((error) => {
  throw new Error(`Error in promise chain: ${error}`);
});
