import React from 'react';
import { connect } from 'react-redux';

import './StudentDetails.scss';
import StudentDetails from '../../components/student-details/StudentDetails';

class StudentDetailsContainer extends React.Component {
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

    onBackHandler = () => {
        this.props.history.push('/students');
    }

    render() {
        return (
            <div className="student-details">
                <h2>Student Details</h2>
                <StudentDetails
                    student={this.state.student}
                />
                <div style={{ margin: '20px 0' }}>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.onBackHandler}
                    >Back</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ students: state.studentReducer.students })

export default connect(mapStateToProps)(StudentDetailsContainer);