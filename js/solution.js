(function () {
  const form = document.querySelector('#todoForm');
  const todoItemsContainer = document.querySelector('[data-todo-items]');

  const notesList = [];

  const createTodoItemTemplate = (config) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'col-4';

    wrapper.insertAdjacentHTML('beforeend', `
            <div class="taskWrapper">
                <div class="taskHeading">${config.title}</div>
                <div class="taskDescription">${config.description}</div>
            </div>`);

    const newNote = {
      // eslint-disable-next-line max-len
      id: localStorage.length ? JSON.parse(localStorage.getItem(localStorage.key(localStorage.length - 1))).id + 1 : 1,
      title: config.title,
      description: config.description,
    };

    notesList.push(newNote);
    localStorage.setItem(newNote.id, JSON.stringify(newNote));

    return wrapper;
  };

  const render = () => {
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      const item = JSON.parse(localStorage.getItem(key));
      const wrapper = document.createElement('div');
      wrapper.className = 'col-4';

      wrapper.insertAdjacentHTML('beforeend', `
            <div class="taskWrapper">
                <div class="taskHeading">${item.title}</div>
                <div class="taskDescription">${item.description}</div>
            </div>`);
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
    const note = createTodoItemTemplate(data);
    todoItemsContainer.append(note);
    e.target.reset();
  });

  document.addEventListener('DOMContentLoaded', (event) => {
    render();
  });
  // localStorage.clear();
}());
