import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from '../app/components/presentational/Navigation';
import PageNotFound from '../app/components/presentational/PageNotFound';
import Home from '../app/components/presentational/Home';
import Contact from '../app/components/presentational/Contact';
import CountryFlagContainer from '../app/components/containers/CountryFlagContainer';
import CountryDetailsContainer from '../app/components/containers/CountryDetailsContainer';
import ContinentsContainer from '../app/components/containers/ContinentsContainer';

export default (
  <Route path="/" component={Navigation}>
    <IndexRoute component={Home} />
    <Route path="countries">
      <IndexRoute component={CountryFlagContainer} />
      <Route path="country/:id" component={CountryDetailsContainer} />
    </Route>
    <Route path="continents" component={ContinentsContainer} />
    <Route path="contact" component={Contact} />
    <Route path="*" component={PageNotFound} />
  </Route>
);
