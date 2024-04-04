const Model = {
  key: 'value',

  get value() {
    const data = JSON.parse(localStorage.getItem(this.key));
    return data || [];
  },

  setValue(data) {
    localStorage.setItem(this.key, JSON.stringify(data));
  },
};
