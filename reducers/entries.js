import { AsyncStorage } from 'react-native';
import { ADD_ENTRY,
         UPDATE_ENTRY,
         DELETE_ENTRY } from '../actions';
         
const initialState = {
    cards: []
};

const entries = async (state = initialState, action) => {
    if (!action.payload) { return state; }
    switch (action.type) {            
        case ADD_ENTRY:
            const keys = await AsyncStorage.getAllKeys();
            if (!keys.includes(`entry${action.payload.id}`)) {
                await AsyncStorage.setItem(`entry${action.payload.id}`, action.payload);
            } else {
                // RETURN AN ERROR OR WARNING TO THE USER HERE SAYING
                // THAT ENTRY ID IS ALREADY BEING USED (though it shouldn't be)
                return;
            }
        case UPDATE_ENTRY:
            await AsyncStorage.setItem(`entry${action.payload.id}`, action.payload);
        case DELETE_ENTRY:
            await AsyncStorage.removeItem(`entry${action.payload.id}`)
        default:
            return state;
    }
}