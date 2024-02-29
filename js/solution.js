(function () {
  const bodyChildren = document.body.childNodes;
  let sum = 0;

  const ul = bodyChildren[1];

  for (const element of ul.childNodes) {
    console.log(element);
    sum += 1;
  }
  console.log(sum);

  const arr = Array.from(ul.childNodes);

  const filteredArr = arr.filter((item) => item.nodeName === 'LI');

  const textArr = [];
  for (const element of filteredArr) {
    textArr.push(element.textContent);
  }
  console.log(textArr);
}());
