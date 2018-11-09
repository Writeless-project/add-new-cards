import { ADD_JOURNAL,
         ADD_ENTRY,
         UPDATE_JOURNAL,
         UPDATE_ENTRY,
         DELETE_JOURNAL,
         DELETE_ENTRY } from '../actions';
         
const initialState = {
    cards: []
};

const addJournal = (state = initialState, action) => {
    switch (action.type) {
        case ADD_JOURNAL:
            
        case ADD_ENTRY:

        case UPDATE_JOURNAL:

        case UPDATE_ENTRY:

        case DELETE_JOURNAL:

        case DELETE_ENTRY:

        default:
            return state;
    }
}