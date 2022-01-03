import React, { useContext } from "react";
import { GameStateContext } from "../Helpers/Contexts";
import { Questions } from "../Helpers/QuestionBank";
import "../App.css";

function EndScreen() {
  const { score, setScore, setGameState } = useContext(GameStateContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };
  return (
    <div className='Endscreen'>
      {""}
      <h1>Quiz Finished</h1>
      <h3>
        {score} / {Questions.length}
      </h3>
    <button onClick={restartQuiz}> Restart Quiz </button>
    </div>
  );
}

export default EndScreen;
