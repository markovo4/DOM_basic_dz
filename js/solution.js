(function () {
  const form = document.querySelector('#todoForm');
  const todoItemsContainer = document.querySelector('[data-todo-items]');

  const wrapperTemplate = (data) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'col-4';

    wrapper.insertAdjacentHTML('beforeend', `
            <div class="taskWrapper">
                <div class="taskHeading">${data.title}</div>
                <div class="taskDescription">${data.description}</div>
            </div>`);
    return wrapper;
  };

  const newNoteObject = (data) => {
    const newNote = {

      id: localStorage.length,
      title: data.title,
      description: data.description,

    };
    localStorage.setItem(newNote.id.toString(), JSON.stringify(newNote));
  };
  const render = () => {
    for (let i = 0; i < localStorage.length; i += 1) {
      const item = JSON.parse(localStorage.getItem(i.toString()));

      const wrapper = wrapperTemplate(item);
      todoItemsContainer.append(wrapper);
    }
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = e.target.querySelectorAll('input, textarea');
    const data = {};

    for (const input of inputs) {
      if (!input.value.trim()) return alert('Lack of data!');
      data[input.name] = input.value;
    }

    newNoteObject(data);
    const note = wrapperTemplate(data);

    todoItemsContainer.append(note);
    e.target.reset();
  });

  document.addEventListener('DOMContentLoaded', () => {
    render();
  });
}());
