import { combineReducers } from 'redux';

import studentReducer from './students.reducer';

const rootReducer = combineReducers({
    studentReducer: studentReducer
});

export default rootReducer;
