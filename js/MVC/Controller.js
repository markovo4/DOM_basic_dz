const Controller = {
  button: document.querySelector('.buttons'),
  input: document.querySelector('.input-number'),

  getCalcValue(e) {
    const currentValue = this.input.value;
    if (!e.target.classList.contains('btn')) return;
    if (currentValue === '') return alert('Please input number');

    const data = {
      value: currentValue,
    };

    const previousValue = Model.value;
    console.log((+previousValue + +currentValue));

    Model.setValue(data);

    View.clearInput();
  },

  init() {
    this.button.addEventListener('click', this.getCalcValue.bind(this));
  },
};
