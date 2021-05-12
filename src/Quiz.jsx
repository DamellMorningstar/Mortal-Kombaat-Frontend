import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Quiz.css";

const Quiz = () => {
  const questions = [
    {
      questionText: "Is This a FightClub App?",
      answerOptions: [
        { answerText: "Yes", isCorrect: false },
        { answerText: "No", isCorrect: false },
        { answerText: "WTF is FightClub?", isCorrect: true },
        {
          answerText:
            "I'm a officer of the law here to take down any illegal FightClubs",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "Who is the Developer of this App?",
      answerOptions: [
        { answerText: "Da-Mell Faines", isCorrect: true },
        { answerText: "Elon Musk", isCorrect: false },
        { answerText: "Dana White", isCorrect: false },
        { answerText: "Al Sharpton", isCorrect: false },
      ],
    },
    {
      questionText: "If This Was a FightClub App, Why would you be here?",
      answerOptions: [
        { answerText: "To Make Money", isCorrect: false },
        { answerText: "Test My Skills", isCorrect: true },
        { answerText: "Make Arrests", isCorrect: false },
        { answerText: "Rob The Place", isCorrect: false },
      ],
    },
    {
      questionText: "What is The #1 Rule of FightClub?",
      answerOptions: [
        { answerText: "Talk About Fightclub", isCorrect: false },
        { answerText: "Kickass", isCorrect: false },
        { answerText: "Let Me In I'm Police", isCorrect: false },
        { answerText: "WTF is FightClub?", isCorrect: true },
      ],
    },
  ];
  const history = useHistory();

  const handleButtonClick = (isCorrect) => {

    if (!isCorrect === true) {
      window.location.href = "https://www.youtube.com/watch?v=ewGaAZcQ3fU"
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    }
    else {
      history.push('/login')
    }
    
  }

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  

  return (
    <div className="app">
      {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
      {showScore ? (
        <div className="score-section">
          You scored 1 out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question 1</span>/{questions.length}
            </div>
            <div className="question-text">
           {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button className='quiz-btn' onClick={() => handleButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
