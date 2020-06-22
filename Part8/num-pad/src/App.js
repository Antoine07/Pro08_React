import React from 'react';
import './App.scss';
import { connect } from 'react-redux';
import Number from './components/Number';
import Input from './components/Input';

const App = ({calculator}) => {

  const { numpad, numbers } = calculator;
  
  return (
    <div className="container">
        <Input numbers={numbers} />
      <div className="row">
        <div className="col-md-8">
          <div className="container-number">
            {numpad.map((number, index) =>
              <Number key={index} number={number} />
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          Reset ...
       </div>
      </div>
    </div>
  );
}

export default connect(state => { return { ...state } } )(App);
