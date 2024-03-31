const Controller = {
    form: document.querySelector('#todoForm'),
    todoItemsContainer: document.querySelector('[data-todo-items]'),

    formHandler(e){
        e.preventDefault();
        const inputs = e.target.querySelectorAll('input, textarea');
        const data = {}

        for(const input of inputs) {
            if(!input.value.trim()) return alert('Lack of data!');
            data[input.name] = input.value
        }
        const savedNote = Model.saveNote(data);
        console.log(savedNote);
        View.addNoteToList(savedNote);
        View.resetForm();
        // const todoItem = createTodoItemTemplate(data)
        // appendTodoItem(todoItem)
    },

    loadedHandler() {
        Model.note.forEach(item => View.addNoteToList(item));
    },

    handleDeleteNote(e){
        e.stopPropagation();
        if(!e.target.hasAttribute('data-remove-btn')) return;

        const noteId = e.target.closest('[data-note-id]').getAttribute('data-note-id');
        try{
            Model.deleteNote(noteId);
            View.removeNote(noteId);
        } catch(err){
            alert(JSON.stringify(err));
        }

    },

    init() {
        this.form.addEventListener('submit', this.formHandler.bind(this));
        document.addEventListener('DOMContentLoaded', this.loadedHandler.bind(this));
        this.todoItemsContainer.addEventListener('click', this.handleDeleteNote.bind(this));

    }
}