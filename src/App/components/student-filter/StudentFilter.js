import React from 'react';

class StudentFilter extends React.Component {
    state = {
        filters: {
            school: '',
            standard: '',
            division: ''
        }
    }

    onChangeHandler = (e) => {
        const filters = { ...this.state.filters };
        filters[e.target.name] = e.target.value;
        this.setState({
            filters
        })
    }

    onSubmitHandler = () => {
        this.props.onFilterHandler(this.state.filters);
    }

    onResetHandler = () => {
        this.setState({
            filters: {
                school: '',
                standard: '',
                division: ''
            }
        },
            () => this.props.onFilterHandler(this.state.filters)
        )
    }

    render() {
        const filters = this.state.filters;
        return (
            <div className="student-filter">
                <form>
                    <div className="row">
                        <div className="filter-col col-lg-2 col-sm-3">
                            <h4>Filters:</h4>
                        </div>
                        <div className="filter-col col-lg-2 col-sm-3">
                            <label>School Name</label>
                            <select
                                className="form-control"
                                name="school"
                                onChange={this.onChangeHandler}
                                value={filters.school}
                            >
                                <option value="">select</option>
                                <option value="School 1">School 1</option>
                                <option value="School 2">School 2</option>
                                <option value="School 3">School 3</option>
                                <option value="School 4">School 4</option>
                                <option value="School 5">School 5</option>
                            </select>
                        </div>
                        <div className="filter-col col-lg-2 col-sm-3">
                            <label>Standard</label>
                            <select
                                className="form-control"
                                name="standard"
                                onChange={this.onChangeHandler}
                                value={filters.standard}
                            >
                                <option value="">select</option>
                                <option value="Standard 1">Standard 1</option>
                                <option value="Standard 2">Standard 2</option>
                                <option value="Standard 3">Standard 3</option>
                                <option value="Standard 4">Standard 4</option>
                                <option value="Standard 5">Standard 5</option>
                            </select>
                        </div>
                        <div className="filter-col col-lg-2 col-sm-3">
                            <label>Division</label>
                            <select
                                className="form-control"
                                name="division"
                                onChange={this.onChangeHandler}
                                value={filters.division}
                            >
                                <option value="">select</option>
                                <option value="Division 1">Division 1</option>
                                <option value="Division 2">Division 2</option>
                                <option value="Division 3">Division 3</option>
                                <option value="Division 4">Division 4</option>
                                <option value="Division 5">Division 5</option>
                            </select>
                        </div>
                        <div className="filter-col col-lg-2 col-sm-3 filter-btn">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={this.onSubmitHandler}
                            >Apply</button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={this.onResetHandler}
                            >Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default StudentFilter;