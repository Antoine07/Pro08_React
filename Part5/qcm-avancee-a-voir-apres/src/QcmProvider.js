import React, { Component, createContext } from 'react';
import { questions } from './questions';

// Context API de React qui va me permettre de contextualiser un store des données
export const QcmContext = createContext();

class QcmProvider extends Component {

  constructor(props) {
    super(props);

    this.state = {
      store: [],
      question: null,
      choice: null
    }
  }

  componentDidMount() {
    this.setState(
      {
        store: questions // récupération des questions
      }
    )
  }

  handleChange = (name, value) => {
    console.log(name, value);

    this.setState({ choice: value })
  }

  handleSubmit = e => {

    console.log(this.state.choice)

    const questions = this.state.store.questions.map(question => {

      if (this.state.question.id === question.id) {
        
        console.log(question.response, this.state.choice);

        if (this.state.choice === question.response) question.status = "success";
        else question.status = "echec";

      }

      return question;
    });


    this.setState({ store: { questions: questions }, question: null, choice: null });
  }

  selected = id => {

    const question = this.state.store.questions.filter(q => q.id === id);
    this.setState({ question: question.length > 0 ? question[0] : null });
  }

  render() {

    const { store, question, choice } = this.state;
    const { children } = this.props;

    // cette composition va me permettre de contextualiser le store donc les questions où je le souhaite
    return (

      <QcmContext.Provider value={{
        store: store,
        selected: this.selected,
        question: question,
        handleChange: this.handleChange,
        choice: choice,
        handleSubmit: this.handleSubmit
      }}>
        {children}
      </QcmContext.Provider>
    );
  }
}

export default QcmProvider;