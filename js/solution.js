(function () {
  const user = {
    name: 'Vlad',
    surname: 'Kirillov',
    get fullName() {
      console.log(`${this.name} ${this.surname}`);
    },
    set fullName(string) {
      this.name = string.split(' ')[0];
      this.surname = string.split(' ')[1];
    },
  };

  Object.defineProperty(user, 'name', {
    writable: false,
  });

  Object.defineProperty(user, 'age', {
    value: 20,
    enumerable: false,
    writable: true,
    configurable: true,
  });

  // console.log(Object.keys(user));
  //
  // for (const key in user) {
  //   console.log(key);
  // }

  user.fullName;
  user.fullName = 'Vova Smith';
  user.fullName;

  // Additional task

  const user2 = {
    name: 'Vlad',
    surname: 'Kirillov',
  };

  Object.freeze(user2);

  user2.age = 20;
  console.log(user2.age); // undefined

  Object.defineProperty(user2, 'age', {
    value: 22,
    writable: true,
    configurable: true,
    enumerable: true,
  }); // Uncaught TypeError: Cannot define property age, object is not extensible
}());
