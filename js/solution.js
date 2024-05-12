const ul = document.querySelector('.list-group');
const div = document.querySelector('.d-flex');

async function logAlbums() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    const albums = await response.json();
    return albums;
  } catch (error) {
    throw new Error(`Error fetching albums: ${error}`);
  }
}

logAlbums().then((albums) => {
  albums.forEach((album) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = `${album.id}. ${album.title}`;
    a.className = 'text-decoration-none';

    li.setAttribute('id', `${album.id}`);
    a.setAttribute('id', `${album.id}`);
    li.className = 'list-group-item';

    li.appendChild(a);
    ul.appendChild(li);
  });
}).catch((error) => {
  throw new Error(`Error in promise chain: ${error}`);
});

const logPhotos = async function (id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
    const photos = await response.json();
    return photos;
  } catch (error) {
    throw new Error(`Error fetching photos: ${error}`);
  }
};

ul.addEventListener('click', (e) => {
  e.preventDefault();
  logPhotos(e.target.id).then((photos) => {
    photos.forEach((photo) => {
      window.location.href = 'photos.html';
      const img = document.createElement('img');
      img.src = photo.thumbnailUrl;
      div.appendChild(img);
    });
  });
});
