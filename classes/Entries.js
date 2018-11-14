export default class Entries {
    constructor() {
        id = 0;
        journalId = '';
        title = '';
        content = '';
        date = '';
    }

    constructor(id, journalId, title, content, date) {
        this.id = id;
        this.journalId = journalId;
        this.title = title;
        this.content = content;
        this.date = date;
    }
}