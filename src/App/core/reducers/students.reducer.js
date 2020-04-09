import { UPDATE_STUDENTS } from "../constants";

const INITIAL_STATE = {
    students: [
        {
            id: 1,
            name: "Aa",
            email: "aa@gmail.com",
            mobile: "1234567890",
            school: "School 2",
            standard: "Standard 1",
            division: "Division 4",
            state: "Maharashtra",
            country: "India"
        },
        {
            id: 2,
            name: "Bb",
            email: "bb@gmail.com",
            mobile: "1234567890",
            school: "School 1",
            standard: "Standard 3",
            division: "Division 2",
            state: "Maharashtra",
            country: "India"
        },
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