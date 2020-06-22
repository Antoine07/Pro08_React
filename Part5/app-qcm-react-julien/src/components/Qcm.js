import React, { Component } from "react";
import Question from "./Question";

class Qcm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null
    };
  }

  componentDidMount() {
    fetch("/data/questions.json")
      .then((response) => response.json())
      .then((data) =>
        setTimeout(() => {
          this.setState({ data: data, isLoading: false });
        }, 1000)
      );
  }

  // Vous pouvez faire un loadData
  loadData = () => {
    if (this.state.isLoading) return <span>Loading...</span>;

    const { questions } = this.state.data;

    return questions.map( (question, i) => {
      return (
        <Question
          { ...question }
          key={i}
        />
      );
    });
  }

  render() {
  
    return (
      <>
        <h2> QCM </h2>
        {this.loadData()}
      </>
    );
  }
}

export default Qcm;