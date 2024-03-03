(function () {
  const generateList = function (arr) {
    const ul = document.createElement('ul');

    arr.forEach((item) => {
      const li = document.createElement('li');

      if (Array.isArray(item)) {
        li.appendChild(generateList(item));
      } else {
        li.appendChild(document.createTextNode(item));
      }
      ul.appendChild(li);
    });

    return ul;
  };
  const array = [1, 2, 3, [1.1, 1.2, 1.3], 4, 5, 6];

  const list = generateList(array);

  document.body.appendChild(list);
}());
