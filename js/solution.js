(function () {
  const form = document.querySelector('[data-form]');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputs = event.target.querySelectorAll('input');
    let isEmpty = false;

    inputs.forEach((input) => {
      if (input.value === '') {
        isEmpty = true;
      }
    });

    if (isEmpty) {
      document.querySelector('[data-fail]').textContent = 'Please fill in all fields.';
      document.querySelector('[data-success]').textContent = '';
    } else {
      document.querySelector('[data-success]').textContent = 'Registration successful.';
      document.querySelector('[data-fail]').textContent = '';
    }
  });
}());
