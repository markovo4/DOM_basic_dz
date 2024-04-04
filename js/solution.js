(function () {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const ul = document.querySelector('#ulId');

  const iterArr = array[Symbol.iterator]();

  const intervalId = setInterval(() => {
    const data = iterArr.next();
    const li = document.createElement('ol');

    if (!data.done) {
      li.innerHTML = `${data.value} Hello world`;
      ul.append(li);
      console.log(data);
    } else {
      clearInterval(intervalId);
    }
  }, 100);
}());
