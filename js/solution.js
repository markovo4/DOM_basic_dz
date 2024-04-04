(function () {

  //Example 3

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const ul = document.querySelector('#ulId');

  const iterArr = array[Symbol.iterator]();

  const intervalId = setInterval(() => {
    const data = iterArr.next();
    const li = document.createElement('ol');

    if (!data.done) {
      li.innerHTML = `${data.value} Hello world`;
      ul.append(li);
      console.log(data);
    } else {
      clearInterval(intervalId);
    }
  }, 100);


  //Example 2

  const person = {
    name: 'Vova',
    lastName: 'Kirillov',
    age: 20,
    favColor: 'yellow',
  }

  function* itrPerson(obj){
    for(const key in obj){
      yield {[key]: obj[key]}
    }
  }

  const vova = itrPerson(person);

  const intervalId2 = setInterval(() => {
    const data = vova.next();

    if(data.done) {
      clearInterval(intervalId2);
    } else {
      console.log(data.value);
    }

  }, 1000);




  //Example 3

  const users = [{name: 'Vlad', age: 20}, {name: 'Vova', age: 27}]

  function* itrArrOfObjects(arr){
    for(let i = 0; i < arr.length; i+= 1){
      for(const key in arr[i]){
        yield {[key]: arr[i][key]}
      }
    }
  }

  const gen2 = itrArrOfObjects(users);
  console.log(gen2.next());
  console.log(gen2.next());
  console.log(gen2.next());
  console.log(gen2.next());

}());
