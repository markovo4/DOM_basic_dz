const ul = document.querySelector('.list-group');

if (ul) {
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

  ul.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = `./photos.html?albumId=${e.target.id}`;
  });
}

if (window.location.search.includes('?albumId=')) {
  const id = window.location.search[window.location.search.length - 1];
  const div = document.querySelector('.d-flex');
  const logPhotos = async function () {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos${window.location.search}`);
      const photos = await response.json();
      return photos;
    } catch (error) {
      throw new Error(`Error fetching photos: ${error}`);
    }
  };

  logPhotos(id).then((photos) => {
    photos.forEach((photo) => {
      const img = document.createElement('img');
      img.src = photo.thumbnailUrl;
      div.appendChild(img);
    });
  });
}
