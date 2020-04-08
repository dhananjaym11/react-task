import { UPDATE_STUDENTS } from "../constants";

const updateStudents = (payload) => ({
    type: UPDATE_STUDENTS,
    payload
});

export { updateStudents };