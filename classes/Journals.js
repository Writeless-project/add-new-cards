export default class Journals {
    constructor() {
        id = 0;
        title = '';
        max_size = 24;
        font_size = 12;
        font_family = 'Roboto';
        page_color = 'white';
        published = false;
        picture = '';
        entries = [];
    }

    constructor(id, title, picture, max_size=24, font_size=12, font_family='Roboto', page_color='white', published=false) {
        this.id = id;
        this.title = title;
        this.picture = picture;
        this.max_size = max_size;
        this.font_size = font_size;
        this.font_family = font_family;
        this.page_color = page_color;
        this.published = published;
    }

    get retrieveEntries() {
        return this.entries;
    }

    static addEntry(entry) {
        entries.push(entry);
    }
}