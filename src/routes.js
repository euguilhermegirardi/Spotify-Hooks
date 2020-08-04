import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Browser from './pages/Browser';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Browser} />
    </Switch>
  )
}
