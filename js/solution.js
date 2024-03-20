const DATA_KEY = 'dataform';

(function () {
  const form = document.querySelector('#form');
  const data = {};

  const formIn = () => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const inputs = event.target.querySelectorAll('input, email, textarea');

      inputs.forEach((item) => {
        data[item.name] = item.value;
      });

      localStorage.setItem(DATA_KEY, JSON.stringify(data));
      window.location.href = 'sub.html';
    });
  };

  const formOut = () => {
    const data = JSON.parse(localStorage.getItem(DATA_KEY));
    const container = document.querySelector('.data-container');

    const ul = document.createElement('UL');
    ul.classList.add('data-ul');
    ul.classList.add('d-flex');
    ul.classList.add('flex-column');
    ul.classList.add('justify-content-between');

    if (data) {
      for (const key in data) {
        if (data[key]) {
          const li = document.createElement('li');
          li.innerHTML = `<b>${key}</b>: ${data[key]}`;
          ul.append(li);
          container.append(ul);
        }
      }
    } else if (!data) {
      container.innerHTML = 'NO DATA WAS ENTERED';
    }
  };

  if (window.location.pathname !== '/DOM_basic_dz/sub.html') {
    formIn();
  } else if (window.location.pathname === '/DOM_basic_dz/sub.html') {
    formOut();
  }
}());
