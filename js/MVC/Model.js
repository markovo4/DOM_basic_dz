const Model = {
    key: 'data',

    *iterator (){
        let a = 0;
        while(true){
            yield ++a;
        }
    },

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
        dataToSave.id = saveData.length ? this.iterator().next().value : 1;

        saveData.push(dataToSave);
        this.note = saveData;
        return this.note.at(-1);
    },


    deleteNote(id){
        this.note = this.note.filter((item) => Number(item.id) !== Number(id));
    }
}