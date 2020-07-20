import React, { Component } from 'react';

import { QcmContext } from '../QcmProvider';

import Question from './Question';

const Badge = ({ difficulty }) => <span className="badge badge-primary badge-pill" >{difficulty}</span>;

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
        {
          ({questions, handleSelected, question, handleChange, choice, handleSubmit }) => {
             
            return (
              <>
                <div className="col-md-4">
                  {
                    questions.map((question, i) => (
                      <li 
                        className="list-group-item d-flex justify-content-between align-items-center"
                        onClick={() => handleSelected(question.id)}

                        onMouseOver = { () => this.changeColor(i)} 
                        onMouseOut = { () => this.changeColor(i)} 

                        style={question.status === 'open' ? (pos ===i ? overStyle : outStyle ) : ( question.status === 'success' ? statusSuccess : statusEchec  ) }
                      >
                        {question.title}
                        <Badge difficulty={question.difficulty} />
                      </li>
                    ))
                  }
                </div>
                <div className="col-md-8">
                  { question && <Question 
                    { ...question } 
                    handleChange={handleChange} 
                    handleSubmit={handleSubmit}
                    choice={choice} 
                    />
                  }
                </div>
              </>
            )
          }
        }
      </QcmContext.Consumer>
    )
  }
}

export default Qcm;