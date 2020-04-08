import React from 'react';

const StudentDetails = ({ student }) => (
    <>
        <div>
            <span>Id:</span>
            <span>{student.id}</span>
        </div>
        <div>
            <span>Name:</span>
            <span>{student.name}</span>
        </div>
        <div>
            <span>Email:</span>
            <span>{student.email}</span>
        </div>
        <div>
            <span>School Name:</span>
            <span>{student.school}</span>
        </div>
        <div>
            <span>Standard:</span>
            <span>{student.standard}</span>
        </div>
        <div>
            <span>Division:</span>
            <span>{student.division}</span>
        </div>
        <div>
            <span>Mobile:</span>
            <span>{student.mobile}</span>
        </div>
        <div>
            <span>State:</span>
            <span>{student.state}</span>
        </div>
        <div>
            <span>Country: </span>
            <span>{student.country}</span>
        </div>
    </>
)

export default StudentDetails;