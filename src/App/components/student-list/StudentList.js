import React from 'react';

import StudentItem from '../student-item/StudentItem';

const StudentList = ({ students }) => (
    <div className="row">
        {students.map(student => <StudentItem
            key={student.id}
            student={student}
        />)}
    </div>
)

export default StudentList;