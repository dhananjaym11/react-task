import React from 'react';

import * as validations from '../../utility/validations';
import * as constants from '../../utility/constants';

class StudentAdd extends React.Component {
    state = {
        student: {
            name: '',
            email: '',
            mobile: '',
            school: '',
            standard: '',
            division: '',
            state: '',
            country: ''
        },
        errors: {
            name: '',
            email: '',
            mobile: ''
        },
        globalError: ''
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
        const errors = { ...this.state.errors };
        student[e.target.name] = e.target.value;
        errors[e.target.name] = '';

        if ((e.target.name === 'name' || e.target.name === 'state' || e.target.name === 'country')
            && !(validations.validateName(e.target.value))) {
            errors[e.target.name] = constants.ERROR_NAME;
        }
        if (e.target.name === 'email' && !(validations.validateEmail(e.target.value))) {
            errors[e.target.name] = constants.ERROR_EMAIL;
        }
        if (e.target.name === 'mobile' && !(validations.validateMobile(e.target.value))) {
            errors[e.target.name] = constants.ERROR_MOBILE;
        }

        this.setState({
            student,
            errors
        })
    }

    onSubmitHandler = () => {
        const emptyData = Object.values(this.state.student).filter(s => s === '');
        const isError = Object.values(this.state.errors).filter(e => e !== '');
        if (emptyData.length || isError.length !== 0) {
            this.setState({
                globalError: constants.ERROR_GLOBAL
            });
            return false;
        };
        this.setState({
            globalError: ''
        });
        this.props.onSubmitHandler(this.state.student);
    }

    render() {
        const { student, errors, globalError } = this.state;
        return (
            <form>
                <div className="row">
                    <div className="form-group col-lg-4 col-sm-6">
                        <label>Name</label>
                        <input
                            type="text"
                            name='name'
                            className="form-control"
                            onChange={this.onChangeHandler}
                            value={student.name}
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>
                    <div className="form-group col-lg-4 col-sm-6">
                        <label>Email Address</label>
                        <input
                            type="email"
                            name='email'
                            className="form-control"
                            onChange={this.onChangeHandler}
                            value={student.email}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="form-group col-lg-4 col-sm-6">
                        <label>Mobile phone number</label>
                        <input
                            type="text"
                            name='mobile'
                            className="form-control"
                            onChange={this.onChangeHandler}
                            value={student.mobile}
                        />
                        {errors.mobile && <p className="error">{errors.mobile}</p>}
                    </div>
                    <div className="form-group col-lg-4 col-sm-6">
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
                    <div className="form-group col-lg-4 col-sm-6">
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
                    <div className="form-group col-lg-4 col-sm-6">
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
                    <div className="form-group col-lg-4 col-sm-6">
                        <label>State</label>
                        <input
                            type="text"
                            name='state'
                            className="form-control"
                            onChange={this.onChangeHandler}
                            value={student.state}
                        />
                        {errors.state && <p className="error">{errors.state}</p>}
                    </div>
                    <div className="form-group col-lg-4 col-sm-6">
                        <label>Country</label>
                        <input
                            type="text"
                            name='country'
                            className="form-control"
                            onChange={this.onChangeHandler}
                            value={student.country}
                        />
                        {errors.country && <p className="error">{errors.country}</p>}
                    </div>
                </div>
                {
                    globalError && <p className="error">{globalError}</p>
                }
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