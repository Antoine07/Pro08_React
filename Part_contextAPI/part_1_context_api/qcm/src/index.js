import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import QcmProvider from './QcmProvider'; // provider pour le context API de React

import * as serviceWorker from './serviceWorker';


// On contextualise l'App pour avoir disponible le store que l'on passe à tout l'arbre de React
// vous pourrez ainsi consommer le store où vous voulez ici on va le faire dans le composant Qcm
ReactDOM.render(
  <React.StrictMode>
    <QcmProvider>
      <App />
    </QcmProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
