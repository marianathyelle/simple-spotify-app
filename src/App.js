import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './styles/global';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';
import ErrorBox from './components/ErrorBox';

import Routes from './routes';
import store from './store';

import { Wrapper, Container, Content } from './styles/components';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Wrapper>
        <Container>
          <Sidebar/>
          <Content>
            <ErrorBox/>
            <Header />
            <Routes/>
          </Content>
        </Container>
        <Player/> 
      </Wrapper>
    </BrowserRouter>
  </Provider>
);

export default App;
