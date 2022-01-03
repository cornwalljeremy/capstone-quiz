import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig)


function App() {
  return (
    <div className="App">
      <AmplifySignOut />
     <h1>Here is the capstone app</h1>
    </div>
  );
}

export default withAuthenticator(App);
