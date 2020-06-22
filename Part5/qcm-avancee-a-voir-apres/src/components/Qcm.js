import React, { Component } from 'react';

import { QcmContext } from '../QcmProvider'; // on récupère le store dans le contexte

import Question from './Question';

const Badge = ({ id }) => <span className="badge badge-primary badge-pill" >{id}</span>;

class Qcm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pos: null
    }
  }

  changeColor = (i) => {
    this.setState({
      pos: i
    })
  }

  render() {
    const overStyle = { color: "#721c24", backgroundColor: "#f5c6cb" };
    const outStyle = { color: "#155724", backgroundColor: "#c3e6cb" };
    const statusEchec = { color: "#000", backgroundColor: "#DD144B" };
    const statusSuccess = { color: "#FFF", backgroundColor: "#14DD42" };
    const { pos } = this.state;

    return (
      <QcmContext.Consumer>
        {({ store, selected, question, handleChange, choice, handleSubmit }) => {
          if (store.questions) {
            const { questions } = store;

            return (
              <>
                <div className="col-md-4">
                  {questions.map((q, i) => (
                    <li
                      className="list-group-item d-flex justify-content-between align-items-center"
                      onMouseOver={() => this.changeColor(i)}
                      onMouseOut={() => this.changeColor(i)}
                      onClick={() => selected(q.id)}
                      style={ q.status == 'open' ? ( pos === i ? overStyle : outStyle ) : (q.status =='success' ? statusSuccess : statusEchec ) }
                      key={i}
                    >
                      {q.title}
                      <Badge id={q.difficulty} />
                    </li>
                  ))}
                </div>
                <div className="col-md-8">
                  {question && <Question 
                  { ...question } 
                  handleChange={handleChange} 
                  choice={choice} 
                  handleSubmit={handleSubmit}
                  />}
                </div>
              </>
            )
          }
        }}
      </QcmContext.Consumer >
    )
  }
}

export default Qcm;