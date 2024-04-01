const Controller = {
  button: document.querySelector('.buttons'),

  getCalcValue(e) {
    const action = e.target;
    return action;
  },

  init() {
    return this.button.addEventListener('click', this.getCalcValue.bind(this));
  },
};
