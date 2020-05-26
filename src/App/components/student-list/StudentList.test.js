import React from 'react';
import { shallow } from 'enzyme';

import StudentList from './StudentList';

it('Test StudentList component', () => {
    const mockStudents = [
        {
            id: 1,
            name: 'A'
        }
    ]
    expect(shallow(<StudentList students={mockStudents} />)).toMatchSnapshot();
});