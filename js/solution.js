const ul = document.querySelector('.list-group');
const div = document.querySelector('.d-flex');

const logAlbums = async function () {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    const albums = await response.json();
    return albums;
  } catch (error) {
    throw new Error(`Error fetching albums: ${error}`);
  }
};

logAlbums().then((albums) => {
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
      console.log(photo);
      const img = document.createElement('img');
      img.src = photo.thumbnailUrl;

      div.appendChild(img);
    });
  });
});
