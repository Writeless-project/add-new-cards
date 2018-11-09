import { combinedReducers } from 'redux';

//all reducers will get inserted into a store, which holds the complete state tree
const rootReducer = combinedReducers({
    //insert all reducers here like notes: allNotes (make sure to import)
});

export default rootReducer;