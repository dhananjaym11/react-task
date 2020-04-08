import { UPDATE_STUDENTS } from "../constants";

const INITIAL_STATE = {
    students: [
        {
            id: 1,
            name: "A",
            email: "a@a.com",
            mobile: "1",
            state: "x",
            country: "y"
        },
        { id: 2, name: 'B' },
        { id: 3, name: 'C' },
        { id: 4, name: 'D' },
        { id: 5, name: 'E' },
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