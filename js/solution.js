(function () {
  const customItr = function (arr) {
    let index = 0;

    return {
      next() {
        if (index < arr.length) {
          return { value: arr[index++], done: false };
        }
        return { value: undefined, done: true };
      },
    };
  };

  const array = ['Vlad', 'Vova', 'Igor'];
  const arrItr = customItr(array);
  console.log(arrItr.next());
  console.log(arrItr.next());
  console.log(arrItr.next());
  console.log(arrItr.next());
}());
