import React, { Component } from 'react';

import './Question.css';
import { questions } from '../questions';

class Question extends Component {

  handleSubmit = e => {
    e.preventDefault();

    this.props.handleSubmit();
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.props.handleChange(name, value);
  }

  render() {

    const { title, question, status, c1, c2, choice } = this.props;

    return (
      <form onSubmit={this.handleSubmit} className="Question" >
        <h2>{title}</h2>
        <p>{question}</p>
        <p><small>Statut de la question {status}</small></p>

        {status === "open" ?
          <>
            <div className="form-check">
              <input
                className="form-check-input Question"
                name={c1}
                type="radio"
                onChange={this.handleChange}
                checked={choice === c1}
                id={c1}
                value={c1}
              />
              <label htmlFor={c1} className="Question-form-check-label" >{c1}</label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input Question"
                name={c2}
                type="radio"
                onChange={this.handleChange}
                checked={choice === c2}
                id={c2}
                value={c2}
              />
              <label htmlFor={c2} className="Question-form-check-label" >{c2}</label>
            </div>
            <button disabled={choice === null} type="submit" class="btn btn-primary app__form">Submit</button>
          </>
          :
          <p>Cette question a déjà été traitée</p>
        }
      </form>
    )
  }
}

export default Question;