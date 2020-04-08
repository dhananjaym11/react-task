import { combineReducers } from 'redux';

import studentReducer from './students.reducer';
import usersReducer from './users.reducer';
import userReducer from './user.reducer';
import heroesReducer from './heroes.reducer';

const rootReducer = combineReducers({
    studentReducer: studentReducer,
    usersReducer: usersReducer,
    userReducer: userReducer,
    heroesReducer: heroesReducer,
});

export default rootReducer;
