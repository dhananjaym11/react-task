import React from 'react';
import { Link } from "react-router-dom";

const StudentItem = ({ student }) => (
    <li>
        <Link to={`/students/${student.id}`}>
            <span>{student.name}</span>
        </Link>
    </li>
)

export default StudentItem;