import React, { Component } from 'react';
import './Question.css';

class Question extends Component {

  handleSubmit = e => {
    e.preventDefault();

    this.props.handleSubmit();
  }

  handleChange = e => {
    const { name,  value } = e.target;

    this.props.handleChange(name, value);
  }

  render() {

    const { question, title, status, c1, c2, choice } = this.props;

    return (
      <form onSubmit={this.handleSubmit} className="Question" >
        <h2>{title}</h2>
        <p>{question}</p>
        <p>{choice}</p>
        <p><small>Statut de la question {status} </small></p>
        {status === 'open' ?
          <>
            <div className="form-check">
              <input
                className="form-check-input Question"
                type="radio"
                name="choice"
                onChange={this.handleChange}
                value={c1}
                id={c1}
                checked={choice === c1}
              />
              <label htmlFor={c1} className="Question-form-check-label" >{c1}</label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input Question"
                type="radio"
                name="choice"
                onChange={this.handleChange}
                value={c2}
                id={c2}
                checked={choice === c2}
              />
              <label htmlFor={c2} className="Question-form-check-label" >{c2}</label>
            </div>
            <button disabled={ choice === null } type="submit" className="btn btn-primary app__form">Submit</button>
          </>
          :
          <p>La question a déjà été traité.</p>
        }
      </form>
    )
  }
}

export default Question;