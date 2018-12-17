import short from 'short-uuid';

class Note {
    constructor(text, color) {
        this.id = short.generate();
        this.text = text;
        this.color = color;
    }

    static of(text, color) {
        return new Note(text, color);
    }
}

export default Note;