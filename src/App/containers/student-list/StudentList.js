import React from 'react';
import { connect } from 'react-redux';

import StudentList from '../../components/student-list/StudentList';

class StudentListContainer extends React.Component {

    onAddHandler = () => {
        this.props.history.push('/students/add');
    }

    render() {
        return (
            <>
                <h2>Student List
                <button
                        type="button"
                        className="btn btn-primary float-right"
                        onClick={this.onAddHandler}
                    >Add Student</button>
                </h2>
                <StudentList
                    students={this.props.students}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => ({ students: state.studentReducer.students })

export default connect(mapStateToProps)(StudentListContainer);