import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import denomination from './reducers/denomination';

import './index.css';
import App from './App';

const store = createStore(denomination);

// Contextualiser le store dans l'arbre de React
const render = () => ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
)

render();