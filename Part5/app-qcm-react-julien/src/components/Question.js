import React, { Component } from "react";
import "../components/Question.scss";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: false,
      shouldShowDetails: false,
      hasSubmitted: false,
      userChoice: null,
      isUserCorrect: null,
    };
  }

  handleChange = (e) => {
    this.setState({ userChoice: e.currentTarget.value });
  }

  handleClick = () => {
    this.setState({ shouldShowDetails: !this.state.shouldShowDetails });
  }

  handleHover = () => {
    return !this.state.shouldShowDetails ? this.setState({ isHover: !this.state.isHover }) : null;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.userChoice === this.props.response) {
      this.setState({ hasSubmitted: true, isUserCorrect: true });
    } else {
      this.setState({ hasSubmitted: true, isUserCorrect: false });
    }
  }

  render() {

    const { id, title, question, c1, c2, difficulty } = this.props;

    const hoverClass = this.state.isHover ? "title__over" : "title__out";

    const detailsClass = this.state.shouldShowDetails ? "details-show" : "details-hide";

    const isUserCorrectClass = this.state.isUserCorrect !== null ? (this.state.isUserCorrect ? "user-right" : "user-wrong") : null;

    const hasSubmitted = this.state.hasSubmitted;

    const isDisabled = (this.state.userChoice == null && !hasSubmitted) || hasSubmitted;

    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <h4
            className={`title__default ${hoverClass}`}
            onMouseEnter={this.handleHover}
            onMouseOut={this.handleHover}
            onClick={this.handleClick}
          >
            {title} <span className="badge badge-primary badge-pill">{difficulty}</span>
          </h4>
          <div className={[detailsClass, isUserCorrectClass ].join(" ")}>
            <strong>{question}</strong>
            <br />
            <label htmlFor={`c1-${id}`}>{c1}</label>
            <input disabled={hasSubmitted} type="radio" name={id} id={`c1-${id}`} value="c1" onChange={this.handleChange} />
            <label htmlFor={`c2-${id}`}>{c2}</label>
            <input disabled={hasSubmitted} type="radio" name={id} id={`c2-${id}`} value="c2" onChange={this.handleChange} />
            <br />
            <button disabled={isDisabled} type="submit">
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default Question;
