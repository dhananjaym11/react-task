import React from 'react';
import { Link } from "react-router-dom";

const StudentItem = ({ student }) => (
    <div className="col-4">
        <div className="student-item">
            <Link to={`/students/${student.id}`} className="details-link">
                <span>
                    Id: <span>{student.id}</span>
                </span>
                <span>
                    Name: <span>{student.name}</span>
                </span>
                <span>
                    Email: <span>{student.email}</span>
                </span>
                <span>
                    Mobile: <span>{student.mobile}</span>
                </span>
                <span>
                    State: <span>{student.state}</span>
                </span>
                <span>
                    Country: <span>{student.country}</span>
                </span>
            </Link>
            <Link to={`/students/edit/${student.id}`} className="edit-link">
                Edit
            </Link>
        </div>
    </div>
)

export default StudentItem;