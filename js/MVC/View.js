const View = {
    form: document.querySelector('#todoForm'),
    todoItemsContainer: document.querySelector('[data-todo-items]'),


    resetForm(){
        this.form.reset();
    },

    createTodoItemTemplate (config) {
        const wrapper = document.createElement('div');
        wrapper.className = 'col-4';
        wrapper.setAttribute('data-note-id', config.id);

        wrapper.innerHTML = `<div class="taskWrapper">
                            <div class="taskHeading">${config.title}</div>
                            <div class="taskDescription">${config.description}</div>
                            <hr>
                            <button class="btn btn-danger btn-sm" data-remove-btn>Delete Note</button>
                        </div>`

        return wrapper;
    },

    appendTodoItem(element)  {
        this.todoItemsContainer.append(element);
    },

    addNoteToList(data) {
        const template = this.createTodoItemTemplate(data);
        this.appendTodoItem(template);
    },

    removeNote(id){
        this.todoItemsContainer.querySelector(`[data-note-id="${id}"]`).remove();
    }

}