(function () {
  const oddOrEven = function () {
    const number = document.getElementById('numberInput').value;
    if (number % 2 === 0) {
      alert('Even');
    } else {
      alert('Odd');
    }
  };

  const button = document.getElementById('button');
  button.addEventListener('click', (oddOrEven));
}());
