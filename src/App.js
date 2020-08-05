import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { Wrapper, Container, Content } from './styles/components';
import GlobalStyle from './styles/global';
import Sidebar from './components/Sidebar/index';
import Header from './components/Header/index';
import Routes from './routes';
import Player from './components/Player/index';
import store from './store';

function App() {
  return (
  <Provider store={store}>
    <Router>
      <Wrapper>
        <GlobalStyle />
        <Container>
          <Sidebar />
          <Content>
            <Header/>
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </Router>
  </Provider>
  );
}

export default App;
