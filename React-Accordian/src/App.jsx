import { useState } from "react";
import "./App.css";
import { Question } from "./components/Accordian";
import accordianData from "./AccordianData";

function App() {
  const questions = accordianData.map((question) => (
    // console.log(item)
    <Question key={question.id} title={question.title} info={question.info} />
  ));

  return (
    <>
      <div className="container bg-blue-800 rounded-xl h-96 m-auto mt-24">
        <div className="heading text-center text-3xl font-bold text-white">
          Frequently Asked Question
        </div>
        {questions}
      </div>
    </>
  );
}

export default App;
