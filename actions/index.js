export const ADD_JOURNAL = 'ADD_JOURNAL';
export const ADD_ENTRY = 'ADD_ENTRY';

export const UPDATE_JOURNAL = 'UPDATE_JOURNAL';
export const UPDATE_ENTRY = 'UPDATE_ENTRY';

export const DELETE_JOURNAL = 'DELETE_JOURNAL';
export const DELETE_ENTRY = 'DELETE_ENTRY';

export const addJournal = journal => {
    return {
        type: ADD_JOURNAL,
        payload: journal
    }
};

export const addEntry = entry => {
    return {
        type: ADD_ENTRY,
        payload: entry
    }
};

export const updateJournal = journal => {
    return {
        type: UPDATE_JOURNAL,
        payload: journal
    }
};

export const updateEntry = entry => {
    return {
        type: UPDATE_ENTRY,
        payload: entry
    }
};

export const deleteJournal = journal => {
    return {
        type: DELETE_JOURNAL,
        payload: journal
    }
};

export const deleteEntry = entry => {
    return {
        type: DELETE_ENTRY,
        payload: entry
    }
};