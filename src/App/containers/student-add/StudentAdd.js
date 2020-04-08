import React from 'react';
import { connect } from 'react-redux';

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
        const lastMemberId = this.props.students.length ? this.props.students[this.props.students.length - 1].id : 0;
        const newHero = {
            id: lastMemberId + 1,
            ...student
        }
        const students = [...this.props.students, newHero];
        this.props.updateStudents(students);
        this.props.history.push('/students');
    }

    render() {
        return (
            <>
                <h2>Student Add</h2>
                <StudentAdd
                    student={this.state.student}
                    onSubmitHandler={this.onSubmitHandler}
                />
            </>
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