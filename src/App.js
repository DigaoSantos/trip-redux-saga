import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/store';

import Header from './components/Header';
import Routes from './routes';

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
