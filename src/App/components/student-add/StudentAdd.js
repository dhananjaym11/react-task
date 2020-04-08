import React from 'react';

class StudentAdd extends React.Component {
    state = {
        student: {
            name: ''
        }
    }

    componentDidUpdate() {
        if (this.props.student && this.props.student.id && this.props.student.id !== this.state.student.id) {
            this.setState({
                student: this.props.student
            })
        }
    }

    onChangeHandler = (e) => {
        const student = { ...this.state.student };
        student[e.target.name] = e.target.value;
        this.setState({
            student
        })
    }

    onSubmitHandler = () => {
        this.props.onSubmitHandler(this.state.student);
    }

    render() {
        const student = this.state.student;
        return (
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name='name'
                        className="form-control"
                        onChange={this.onChangeHandler}
                        value={student.name}
                    />
                </div>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.onSubmitHandler}
                >Submit</button>
            </form>
        )
    }
}

export default StudentAdd;