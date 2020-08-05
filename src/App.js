import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';
import { Wrapper, Container, Content } from './styles/components';
import Routes from './routes';
import store from './store';

function App() {
  return (
  <Provider store={store}>
    <Router>
      <Wrapper>
        <GlobalStyle />
        <Container>
          <Content>
            <Routes />
          </Content>
        </Container>
      </Wrapper>
    </Router>
  </Provider>
  );
}

export default App;
