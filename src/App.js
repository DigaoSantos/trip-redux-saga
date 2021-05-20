import React from 'react'
import { Router } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/Header';
import Routes from './routes';

import history from './services/history';
import store from '../src/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <Routes/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;


// Router parace estar com problema
// o código abaixo deveria funcionar

/*
function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header/>
        <Routes/>
      </Router>
    </Provider>
  );
}

export default App;
*/