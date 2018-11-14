import { ADD_JOURNAL,
         ADD_ENTRY,
         UPDATE_JOURNAL,
         UPDATE_ENTRY,
         DELETE_JOURNAL,
         DELETE_ENTRY } from '../actions';
         
const initialState = {
    cards: []
};

const journals = async (state = initialState, action) => {
    switch (action.type) {
        case ADD_JOURNAL:
        const keys = await AsyncStorage.getAllKeys();
        if (!keys.includes(`journal${action.payload.id}`)) {
            await AsyncStorage.setItem(`journal${action.payload.id}`, action.payload);
        } else {
            // RETURN AN ERROR OR WARNING TO THE USER HERE SAYING
            // THAT ENTRY ID IS ALREADY BEING USED (though it shouldn't be)
            return;
        }
        case UPDATE_JOURNAL:
            await AsyncStorage.setItem(`journal${action.payload.id}`, action.payload);
        case DELETE_JOURNAL:
            await AsyncStorage.removeItem(`journal${action.payload.id}`)
        default:
            return state;
    }
}