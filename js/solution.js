const bodyChildren = document.body.childNodes;
const ul = bodyChildren[1];

const arrNodes = Array.from(ul.childNodes);
console.log(arrNodes);

const attributeArr = arrNodes.filter((item) => item.nodeName === 'LI');
console.log(attributeArr);

const textArr = [];
for (const element of attributeArr) {
  textArr.push(element.textContent);
}

textArr[9] = 'Привет меня зовут Vova';
console.log(textArr);

const firstLi = document.getElementById('firstItem');
firstLi.setAttribute('data-my-name', 'Vova');
console.log(firstLi.getAttribute('data-my-name'));

const Ul = document.getElementById('ulId');
Ul.removeAttribute('data-dog-tail');
console.log(Ul);
