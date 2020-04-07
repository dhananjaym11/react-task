import { combineReducers } from 'redux';

import usersReducer from './users.reducer';
import userReducer from './user.reducer';
import heroesReducer from './heroes.reducer';

const rootReducer = combineReducers({
    usersReducer: usersReducer,
    userReducer: userReducer,
    heroesReducer: heroesReducer,
});

export default rootReducer;
