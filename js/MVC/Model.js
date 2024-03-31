const Model = {
    key: 'data',

    get note() {
        const data = JSON.parse(localStorage.getItem(this.key));
        return data ? data : [];
    },

    set note(notesArray){
        localStorage.setItem(this.key, JSON.stringify(notesArray));
    },

    saveNote (data) {
        const saveData = structuredClone(this.note);
        const dataToSave = structuredClone(data);
        dataToSave.id = saveData.length ? saveData.at(-1).id + 1 : 1;

        saveData.push(dataToSave);
        this.note = saveData;
        return this.note.at(-1);
    },


    deleteNote(id){
        this.note = this.note.filter((item) => Number(item.id) !== Number(id));
    }
}