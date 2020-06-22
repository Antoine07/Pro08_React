import React from "react";
import Question from "./Question";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

let dataQcm = {
  id: 1,
  title: "Framework React",
  question: "React est-il un framework ?",
  c1: "oui",
  c2: "non",
  response: "c2",
  status: "open",
  success: false,
  choice: null,
  difficulty: "medium",
};

describe("<Question /> test submit", () => {
  it("<Question /> tests initialize contains", () => {
    const question = mount(<Question {...dataQcm} />);
    expect(question).toHaveLength(1);
  });
  it("Selects a response", () => {
    const question = mount(<Question {...dataQcm} />);
    question.find("#c1-1").simulate("change");
    expect(question.state().userChoice).toEqual("c1");
  });
  it("Submits without selecting a response not possible", () => {
    const question = mount(<Question {...dataQcm} />);
    expect(question.find("button").props().disabled).toEqual(true);
  });
  it("Submits after selecting a response is possible", () => {
    const question = mount(<Question {...dataQcm} />);
    question.find("#c1-1").simulate("change");
    expect(question.find("button").props().disabled).toEqual(false);
  });
  it("Submits a good response", () => {
    const question = mount(<Question {...dataQcm} />);
    question.find("#c2-1").simulate("change");
    question.find("form").simulate("submit");
    expect(question.state().isUserCorrect).toEqual(true);
  });
  it("Submits a wrong response", () => {
    const question = mount(<Question {...dataQcm} />);
    question.find("#c1-1").simulate("change");
    question.find("form").simulate("submit");
    expect(question.state().isUserCorrect).toEqual(false);
  });
});
