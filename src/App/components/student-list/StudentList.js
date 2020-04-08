import React from 'react';

import StudentItem from '../student-item/StudentItem';

const StudentList = ({ students }) => (
    <ul>
        {students.map(student => <StudentItem
            key={student.id}
            student={student}
        />)}
    </ul>
)

export default StudentList;