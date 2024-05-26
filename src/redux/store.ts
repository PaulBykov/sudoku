import {combineReducers, createStore} from 'redux';
import validityReducer from './reducers/ceilsValidityReducer';
import selectedNumberReducer from './reducers/selectedNumberReducer'
import defaultFieldReducer from "./reducers/defaultFieldReducer";
import currentFieldReducer from "./reducers/currentFieldReducer";
import solvedFieldReducer from "./reducers/solvedFieldReducer";

const rootReducer = combineReducers({
    cellsValidityReducer: validityReducer,
    defaultFieldReducer: defaultFieldReducer,
    currentFieldReducer: currentFieldReducer,
    selectedNumberReducer: selectedNumberReducer,
    solutionReducer: solvedFieldReducer
})


const store = createStore(rootReducer);


export type RootState = ReturnType<typeof rootReducer>;
export default store;