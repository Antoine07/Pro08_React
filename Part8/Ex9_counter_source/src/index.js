import React from 'react'
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counter from './reducer/counter';

import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(counter);

render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root') 
);