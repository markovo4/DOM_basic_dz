(function () {
  const form = document.querySelector('[data-form]');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputs = event.target.querySelectorAll('input');
    let isEmpty = false;

    inputs.forEach((input) => {
      isEmpty = input.value === '';
    });

    if (isEmpty) {
      alert('Please fill all the fields');
    }
  });
}());
