import './App.css';
import { QuizContext } from "./Helpers/Contexts";
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import React,  {useState}  from 'react'
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";;


Amplify.configure(awsconfig)


function App() {

  const [gameState, setGameState] = useState("menu");
  return (
    <div className="App">
      <h1>Capstone Quiz</h1>
      <QuizContext.Provider value={{ gameState, setGameState}}>
      {gameState === 'menu' && <MainMenu />}
      {gameState === 'quiz' && <Quiz />}
      {gameState === 'endScreen' && <EndScreen />}
      </QuizContext.Provider>
      
     

     {/* <AmplifySignOut /> */}
    </div>
  );
}

export default withAuthenticator(App);
