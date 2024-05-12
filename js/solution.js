const ul = document.querySelector('.list-group');
const div = document.querySelector('.d-flex');

async function logAlbums() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos?albumId=2');
    const albums = await response.json();
    console.log(albums);
    return albums;
  } catch (error) {
    console.error('Error fetching albums:', error);
  }
}

logAlbums().then((albums) => {
  albums.forEach((album) => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = album.title;
    ul.appendChild(li);
    const img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = album.thumbnailUrl;
    div.appendChild(img);
  });
}).catch((error) => {
  console.error('Error in promise chain:', error);
});
