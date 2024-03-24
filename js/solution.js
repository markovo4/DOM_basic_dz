(function () {
  const form = document.querySelector('#todoForm');
  const todoItemsContainer = document.querySelector('[data-todo-items]');

  const wrapperTemplate = (data) => `
      <div class="col-4">
        <div class="taskWrapper">
          <div class="taskHeading">${data.title}</div>
          <div class="taskDescription">${data.description}</div>
        </div>
      </div>`;

  const saveNote = (data) => {
    const id = localStorage.length;
    localStorage.setItem(id.toString(), JSON.stringify(data));
  };

  const render = () => {
    for (let i = 0; i < localStorage.length; i += 1) {
      const item = JSON.parse(localStorage.getItem(i.toString()));
      const wrapper = document.createElement('div');
      wrapper.innerHTML = wrapperTemplate(item);
      todoItemsContainer.append(wrapper.firstElementChild);
    }
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (!Object.values(data).every((value) => value.trim())) {
      return alert('Lack of data!');
    }

    saveNote(data);
    todoItemsContainer.insertAdjacentHTML('beforeend', wrapperTemplate(data));
    e.target.reset();
  });

  document.addEventListener('DOMContentLoaded', render);
}());
