import React from 'react';

class StudentAdd extends React.Component {
    state = {
        student: {}
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
                <div className="row">
                    <div className="form-group col-4">
                        <label>Name</label>
                        <input
                            type="text"
                            name='name'
                            className="form-control"
                            onChange={this.onChangeHandler}
                            value={student.name}
                        />
                    </div>
                    <div className="form-group col-4">
                        <label>Email Address</label>
                        <input
                            type="email"
                            name='email'
                            className="form-control"
                            onChange={this.onChangeHandler}
                            value={student.email}
                        />
                    </div>
                    <div className="form-group col-4">
                        <label>Mobile phone number</label>
                        <input
                            type="text"
                            name='mobile'
                            className="form-control"
                            onChange={this.onChangeHandler}
                            value={student.mobile}
                        />
                    </div>
                    <div className="form-group col-4">
                        <label>School Name</label>
                        <select
                            className="form-control"
                            name="school"
                            onChange={this.onChangeHandler}
                            value={student.school}
                        >
                            <option value="">select</option>
                            <option value="School 1">School 1</option>
                            <option value="School 2">School 2</option>
                            <option value="School 3">School 3</option>
                            <option value="School 4">School 4</option>
                            <option value="School 5">School 5</option>
                        </select>
                    </div>
                    <div className="form-group col-4">
                        <label>Standard</label>
                        <select
                            className="form-control"
                            name="standard"
                            onChange={this.onChangeHandler}
                            value={student.standard}
                        >
                            <option value="">select</option>
                            <option value="Standard 1">Standard 1</option>
                            <option value="Standard 2">Standard 2</option>
                            <option value="Standard 3">Standard 3</option>
                            <option value="Standard 4">Standard 4</option>
                            <option value="Standard 5">Standard 5</option>
                        </select>
                    </div>
                    <div className="form-group col-4">
                        <label>Division</label>
                        <select
                            className="form-control"
                            name="division"
                            onChange={this.onChangeHandler}
                            value={student.division}
                        >
                            <option value="">select</option>
                            <option value="Division 1">Division 1</option>
                            <option value="Division 2">Division 2</option>
                            <option value="Division 3">Division 3</option>
                            <option value="Division 4">Division 4</option>
                            <option value="Division 5">Division 5</option>
                        </select>
                    </div>
                    <div className="form-group col-4">
                        <label>State</label>
                        <input
                            type="text"
                            name='state'
                            className="form-control"
                            onChange={this.onChangeHandler}
                            value={student.state}
                        />
                    </div>
                    <div className="form-group col-4">
                        <label>Country</label>
                        <input
                            type="text"
                            name='country'
                            className="form-control"
                            onChange={this.onChangeHandler}
                            value={student.country}
                        />
                    </div>
                </div>
                <div className="btn-container">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.onSubmitHandler}
                    >Submit</button>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={this.props.onCancelHandler}
                    >Cancel</button>
                </div>
            </form>
        )
    }
}

export default StudentAdd;