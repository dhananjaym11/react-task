import React from 'react';
import { connect } from 'react-redux';

import './StudentAdd.scss';
import * as actions from '../../core/actions';
import StudentAdd from '../../components/student-add/StudentAdd';

class StudentAddContainer extends React.Component {
    state = {
        student: {}
    }

    componentDidMount() {
        const id = parseInt(this.props.match.params.id);
        if (this.props.students && this.props.students.length) {
            const student = this.props.students.find(student => student.id === id);
            this.setState({
                student: student
            })
        }
    }

    onSubmitHandler = (student) => {
        let students = null;
        const orgStudents = this.props.students
        if (student.id) {
            students = orgStudents.map(s => s.id === student.id ? ({ ...student }) : s);
        } else {
            const lastMemberId = orgStudents.length ? orgStudents[orgStudents.length - 1].id : 0;
            const updatedStudent = {
                id: lastMemberId + 1,
                ...student
            }
            students = [...orgStudents, updatedStudent];
        }
        this.props.updateStudents(students);
        this.props.history.push('/students');
    }

    onCancelHandler = () => {
        this.props.history.push('/students');
    }

    render() {
        return (
            <div className="student-add">
                <h2>Add Student</h2>
                <StudentAdd
                    student={this.state.student}
                    onSubmitHandler={this.onSubmitHandler}
                    onCancelHandler={this.onCancelHandler}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ students: state.studentReducer.students })

const mapDispatchToProps = (dispatch) => ({
    updateStudents: (heroes) => {
        dispatch(actions.updateStudents(heroes))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(StudentAddContainer);