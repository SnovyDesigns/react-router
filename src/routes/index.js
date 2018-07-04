import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from '../app/components/presentational/Navigation';
import PageNotFound from '../app/components/presentational/PageNotFound';
import Home from '../app/components/presentational/Home';
import Contact from '../app/components/presentational/Contact';

export default (
  <Route path="/" component={Navigation}>
    <IndexRoute component={Home} />
    <Route path="contact" component={Contact} />
    <Route path="*" component={PageNotFound} />
  </Route>
);
