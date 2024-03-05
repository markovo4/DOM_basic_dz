(function () {
  const input = document.getElementById('textInput');
  const button = document.getElementById('submitButton');
  const list = document.getElementById('noteList');

  button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.className = 'note-item';

    if (input.value.trim() !== '') {
      li.innerHTML = input.value;
      list.prepend(li);
      input.value = '';
    }
  });
}());
