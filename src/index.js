//import the necessary files
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './css/index.css';
import {allTimeComponent} from './components/alltime';
import {mostRecentComponent} from './components/mostrecent';

//create the main class that handles routing
class Leaderboard extends React.Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path={'/'} component={mostRecentComponent} />
          <Route path={'/all-time'} component={allTimeComponent} />
        </Switch>
      </Router>
    );
  }
};

ReactDOM.render(<Leaderboard />, document.getElementById('app'));
