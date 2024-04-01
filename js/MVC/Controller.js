const Controller = {
  button: document.querySelector('.buttons'),

  getCalcValue(e) {
    const action = e.target.textContent;
    return action;
  },

  get value() {
    return this.getCalcValue.bind(this);
  },
};
