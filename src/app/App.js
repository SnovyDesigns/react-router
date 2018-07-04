import React, { Component } from 'react';
import {
  Router,
  Route,
  IndexRoute,
  IndexLink,
  hashHistory
} from 'react-router';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Navigation}>
          <IndexRoute component={Home} />
          <Route path="*" component={PageNotFound} />
        </Route>
      </Router>
    );
  }
}

const Navigation = props => (
  <div>
    <ul>
      <li>
        <IndexLink to="/">Home</IndexLink>
      </li>
    </ul>
    {props.children}
  </div>
);
const Home = () => <h1>Hej, tu Home component</h1>;
const PageNotFound = () => <h1>404 Not Found</h1>;

export default App;
