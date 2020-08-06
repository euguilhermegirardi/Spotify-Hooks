import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Browser from './pages/Browser';
import Playlist from './pages/Playlist';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Browser} />
      <Route exact path="/playlists/:id" component={Playlist} />
    </Switch>
  )
}
