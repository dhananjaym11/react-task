import React from 'react';
import { connect } from 'react-redux';

import './StudentList.scss';
import StudentList from '../../components/student-list/StudentList';
import StudentFilter from '../../components/student-filter/StudentFilter';

class StudentListContainer extends React.Component {
    state = {
        filters: {}
    }

    onAddHandler = () => {
        this.props.history.push('/students/add');
    }

    onFilterHandler = (filters) => {
        console.log(filters);
        this.setState({
            filters
        })
    }

    render() {
        const filters = { ...this.state.filters };
        const filteredStudents = this.props.students.filter(s => {
            if (filters.school || filters.standard || filters.division) {
                return (filters.school ? s.school === filters.school : s) &&
                    (filters.standard ? s.standard === filters.standard : s) &&
                    (filters.division ? s.division === filters.division : s);
            } else {
                return s
            }
        });
        return (
            <div className="student-list">
                <h2 className="clearfix">
                    Student List
                    <button
                        type="button"
                        className="btn btn-primary float-right"
                        onClick={this.onAddHandler}
                    >Add Student</button>
                </h2>
                <StudentFilter
                    onFilterHandler={this.onFilterHandler}
                />
                {filteredStudents.length ?
                    <StudentList
                        students={filteredStudents}
                    /> :
                    <p style={{ textAlign: 'center', marginTop: 50 }}> No data found.</p >
                }
            </div >
        )
    }
}

const mapStateToProps = (state) => ({ students: state.studentReducer.students })

export default connect(mapStateToProps)(StudentListContainer);