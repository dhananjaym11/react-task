import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import StudentListContainer from './containers/student-list/StudentList';
import StudentDetailsContainer from './containers/student-details/StudentDetails';
import StudentAddContainer from './containers/student-add/StudentAdd';
import Layout from './hoc/layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Switch>
              <Redirect exact from="/" to="students" />
              <Route exact path="/students" component={StudentListContainer} />
              <Route exact path="/students/add" component={StudentAddContainer} />
              <Route exact path="/students/edit/:id" component={StudentAddContainer} />
              <Route exact path="/students/:id" component={StudentDetailsContainer} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;