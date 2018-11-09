export default class Entries {
    constructor() {
        id = 0;
        title = '';
        content = '';
        date = '';
    }

    constructor(id, title, content, date) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.date = date;
    }
}