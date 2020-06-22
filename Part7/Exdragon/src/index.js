import React from 'react'
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import dragon from './reducer/dragon';

import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(dragon);

// Contextualiser le store dans l'arbre de React
const render = () => ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
)

render()