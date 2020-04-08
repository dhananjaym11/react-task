import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import StudentListContainer from './containers/student-list/StudentList';
import StudentDetailsContainer from './containers/student-details/StudentDetails';
import StudentAddContainer from './containers/student-add/StudentAdd';
import HeroesContainer from './containers/heroes/Heroes';
import HeroContainer from './containers/hero/Hero';
import UsersContainer from './containers/users/Users';
import UserContainer from './containers/user/User';
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
              <Route exact path="/heroes" component={HeroesContainer} />
              <Route exact path="/heroes/:id" component={HeroContainer} />
              <Route exact path="/users" component={UsersContainer} />
              <Route exact path="/users/:username" component={UserContainer} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;