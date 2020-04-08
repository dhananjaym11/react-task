import React from 'react';
import { Link } from "react-router-dom";

const StudentItem = ({ student }) => (
    <div className="col-4">
        <div className="student-item">
            <Link to={`/students/${student.id}`} className="details-link">
                <span>
                    <span>Id: </span>
                    <span>{student.id}</span>
                </span>
                <span>
                    <span>Name: </span>
                    <span>{student.name}</span>
                </span>
                <span>
                    <span>Email: </span>
                    <span>{student.email}</span>
                </span>
                <span>
                    <span>School Name:</span>
                    <span>{student.school}</span>
                </span>
                <span>
                    <span>Standard:</span>
                    <span> {student.standard}</span>
                </span>
                <span>
                    <span>Division:</span>
                    <span>{student.division}</span>
                </span>
                <span>
                    <span>Mobile: </span>
                    <span>{student.mobile}</span>
                </span>
                <span>
                    <span>State: </span>
                    <span>{student.state}</span>
                </span>
                <span>
                    <span>Country: </span>
                    <span>{student.country}</span>
                </span>
            </Link>
            <Link to={`/students/edit/${student.id}`} className="edit-link">
                Edit
            </Link>
        </div>
    </div>
)

export default StudentItem;