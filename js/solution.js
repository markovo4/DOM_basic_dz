const ul = document.querySelector('#ulId');

let result;

const jsonObjectPromise = fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => {
    result = json;
    return json;
  });

function* iterObj(obj) {
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === 'object' && value !== null) {
      yield* iterObj(value);
    } else {
      yield { [key]: value };
    }
  }
}

(async () => {
  await jsonObjectPromise;
  const iterator = iterObj(result);
  const intervalId = setInterval(() => {
    const { value, done } = iterator.next();
    for (const key in value) {
      if (!done) {
        const li = document.createElement('li');
        li.innerHTML = `${[key]}: ${value[key]}`;
        ul.append(li);
        console.log(value);
      } else if (done) {
        clearInterval(intervalId);
      }
    }
  }, 500);
})();
