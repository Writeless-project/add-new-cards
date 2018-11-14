import {
    AsyncStorage
} from 'react-native';

export class Journals {
    constructor() {
        this.id = 0;
        this.title = '';
        this.max_size = 24;
        this.font_size = 12;
        this.font_family = 'Roboto';
        this.page_color = 'white';
        this.published = false;
        this.picture = '';
    }

    // constructor(id, title, picture, max_size=24, font_size=12, font_family='Roboto', page_color='white', published=false) {
    // this.id = id;
    // this.title = title;
    // this.picture = picture;
    // this.max_size = max_size;
    // this.font_size = font_size;
    // this.font_family = font_family;
    // this.page_color = page_color;
    // this.published = published;
    // }

    get entries() {
        return new Promise(async resolve => {
            await AsyncStorage.setItem('Entries', JSON.stringify({
                id: 'potato',
                title: 'hot potato',
                meat: 'carne'
            }));
            let entries = await AsyncStorage.getItem('Entries') || null;
            resolve(JSON.parse(entries));
        })
    }

    static addEntry(entry) {
        entries.push(entry);
    }
}