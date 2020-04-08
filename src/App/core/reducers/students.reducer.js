import { UPDATE_STUDENTS } from "../constants";

const INITIAL_STATE = {
    students: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
        { id: 3, name: 'C' },
    ]
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_STUDENTS:
            return { ...state, students: action.payload };
        default:
            return state;
    }
}

export default reducer;