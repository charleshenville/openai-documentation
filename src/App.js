import TextField from './TextField';
import Submit from './Submit';
import './App.css';

import openai from 'openai';
import axios from 'axios';

import { useState } from "react";
import { useEffect } from "react";

function App() {

  // const openai = require('openai');
  // const openaiClient = new openai('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');
  const [response, setResponse] = useState('');
  const [fileContents, setFileContents] = useState('');
  const [prompt, setPrompt] = useState('');
  
  return (
    <div className="App">
      <div className="title">
        <h1>OpenAI Documentation Generator</h1>
      </div>
      <header className="App-header">

        <div className="gridMain">

          <a className='qu'>Enter a Filename or Query:</a>
          <div className="textfield">
            <TextField />
          </div>
          <Submit/>
          <a className="out">Output: </a>
          <div className='outContainer'>
            <a>{response}</a>
          </div>

        </div>

      </header>
    </div>
  );
}

export default App;
