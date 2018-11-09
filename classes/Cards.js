import { Journals } from './Journals';
import { Entries } from './Entries';

export default class Card {
    constructor() {
        id = 0;
        first_name = '';
        last_name = '';
        password = '';
        email = '';
        journals = [];
    }

    get retrieveJournals() {
        return this.Journals;
    }

    
}