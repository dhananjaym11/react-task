import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import StudentListContainer from './containers/student-list/StudentList';
import StudentDetailsContainer from './containers/student-details/StudentDetails';
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
              <Route exact path="/students" component={StudentListContainer} />
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