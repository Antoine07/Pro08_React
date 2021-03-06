import React, { useEffect } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import Number from './components/Number';
import Input from './components/Input';

import { initMultiplications, restart, resetNumpad, setMemory } from './actions/actions-types';
import Submit from './components/Submit';
import Btn from './components/Btn';
import Message from './components/Message';

const App = ({ calculator, initMultiplications, memory, restart, resetNumpad, setMemory }) => {

  // life cycle importer dans la fonction à l'aide d'un Hook
  useEffect(() => {
    initMultiplications();
  }, []); // tableau vide => exécuter qu'au montage du composant dans le DOM

  const { numpad, numbers, multiplication, score, step, status, total, message } = calculator;

  const { memories } = memory;

  useEffect(() => {
   console.log('status', status)
  }, [status]); // tableau vide => exécuter qu'au montage du composant dans le DOM


  if (status)
    return (
      <div className="container">
        {message && <Message message={message} />}
        {multiplication && <Input numbers={numbers} multiplication={multiplication} />}
        <div className="row">
          <div className="col-md-8">
            <div className="container-number">
              {numpad.map((number, index) =>
                <Number key={index} number={number} />
              )}
            </div>
          </div>
          <div className="col-md-4">
            <div style={{ marginTop: "10px" }} className="alert alert-primary" role="alert">
              Il vous reste à trouver encore  : {step} / {total} multiplication(s).<br />
                  Score : {score}  <br />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Submit />
            <Btn type="btn-primary" action={resetNumpad} message="Clean numpad" />
          </div>
        </div>
      </div>
    );

  return (
    <div className="Status alert alert-primary" role="alert">
      Bilan <br />
         Score : {score}  <br />
      <Btn type="btn-primary" action={restart} message="rejouer ?" />

  { memories.length > 0 && memories.map((memory, i) => <p key={i}> {i+1} - Score :{memory.score}</p>)}
    </div>
  )
}

const mapStateToProps = state => { return { ...state } };

const mapDispatchToProps = { initMultiplications, restart, resetNumpad, setMemory }

export default connect(mapStateToProps, mapDispatchToProps)(App);