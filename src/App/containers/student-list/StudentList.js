import React from 'react';
import { connect } from 'react-redux';

import StudentList from '../../components/student-list/StudentList';

class StudentListContainer extends React.Component {

    render() {
        return (
            <>
                <h2>Student List</h2>
                <StudentList
                    students={this.props.students}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => ({ students: state.studentReducer.students })

export default connect(mapStateToProps)(StudentListContainer);