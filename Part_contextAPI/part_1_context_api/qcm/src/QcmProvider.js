import React, { Component, createContext } from 'react';
import { questions } from './questions';

export const QcmContext = createContext();

class QcmProvider extends Component {

  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      question: null,
      choice: null
    }
  }

  componentDidMount() {
    this.setState(
      {
        questions: questions.questions
      }
    )
  }

  handleChange = (name, value) => {
   
    this.setState({ choice : value });
  }

  handleSubmit = e => {

    const questions = this.state.questions.map(question => {

      if(this.state.question.id === question.id){

        if(this.state.choice === question.response) question.status = "success";
        else question.status = "echec";
      }

      return question ;
    });

    this.setState({ questions : questions , question : null, choice : null });

  }

  handleSelected = id => {
   
    const question = this.state.questions.filter( q => q.id === id);

    this.setState({
      question : question.length > 0 ? question[0] : null, 
      choice : null
    })

  }

  render() {

    const { children } = this.props;
    const { questions, question, choice } = this.state;

    return (

      <QcmContext.Provider value={{ 
        questions : questions, 
        handleSelected : this.handleSelected,
        question : question,
        choice : choice,
        handleChange : this.handleChange,
        handleSubmit : this.handleSubmit
        }} >
        {children}
      </QcmContext.Provider>
    );
  }
}

export default QcmProvider;