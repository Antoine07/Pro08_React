import React, { useEffect } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import Number from './components/Number';
import Input from './components/Input';

import { initMultiplications } from './actions/actions-types';

const App = ({calculator, initMultiplications}) => {

  // life cycle 
  useEffect(() => {
    initMultiplications();
  }, []);

  const { numpad, numbers, multiplications } = calculator;
  
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
          {multiplications.length > 0 && multiplications.map((multiplication, i) => {
            console.log(multiplication)
          }) }
       </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => { return { ...state } } ;

const mapDispatchToProps = { initMultiplications }

export default connect(mapStateToProps,mapDispatchToProps)(App);