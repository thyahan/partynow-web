import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './containers/HomePage';
import About from './containers/About';
import PageNotFound from './containers/PageNotFound';
import Artist from './containers/Artist';
import Brand from './containers/Brand';

const Router = props => {
  return (
    <div className='router'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/home' component={HomePage} />
        <Route path='/about' component={About} />
        <Route path='/artist' component={Artist} />
        <Route path='/brand' component={Brand} />
        <Route path='/*' component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default Router;
