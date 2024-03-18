(function () {
  const form = document.getElementById('form');
  const dataKey = 'formData';

  if (form !== null) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const elements = event.target.querySelectorAll('input, select, textarea');
      const data = Array.from(elements).reduce((accumulator, item) => {
        accumulator[item.name] = item.value;
        return accumulator;
      }, {});

      for (const key in data) {
        if (data[key] === '') {
          alert('Please fill all the fields');
          return;
        }
      }
      localStorage.setItem(dataKey, JSON.stringify(data));

      window.location.href = 'sub.html';
    });
  }

  if (window.location.pathname === '/DOM_basic_dz/sub.html') {
    const data = JSON.parse(localStorage.getItem(dataKey));

    const dataContainer = document.querySelector('.data-container');

    if (document.querySelector('.data-ul')) {
      document.querySelector('.data-ul').remove();
    }

    const ul = document.createElement('UL');
    ul.classList.add('data-ul');
    ul.classList.add('d-flex');
    ul.classList.add('flex-column');
    ul.classList.add('justify-content-between');
    // ul.classList.add('align-items-center');

    for (const key in data) {
      const li = document.createElement('LI');
      li.innerHTML = `<b>${key}</b> : <i>${data[key]}</i>`;
      ul.append(li);
      dataContainer.append(ul);
    }
  }
}());
