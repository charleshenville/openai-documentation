import TextField from './TextField';
import Submit from './Submit';
import './App.css';

import { Configuration, OpenAIApi } from "openai";
import axios from 'axios';

import { useState } from "react";
import { useEffect } from "react";

const apiKey = "";

function App() {

  const [response, setResponse] = useState('');
  const [fileContents, setFileContents] = useState('');
  let [prompt, setPrompt] = useState('');
  const [entryTxt, setEntryTxt] = useState('Provide a Prompt...');
  const [isDisabled, setDisabled] = useState(false);

  class OpenAI {
    constructor(apiKey) {
      // Create the Configuration and OpenAIApi instances
      this.openai = new OpenAIApi(new Configuration( "" ));
    }
  }

  function handleSubmission() {
    setEntryTxt('Generating Prompt...');
    let resp = generateText({prompt});
    console.log({resp});
    // setResponse({resp});
    setPrompt('');
    setEntryTxt('Provide a Prompt...');
  }

  async function generateText(prompt2API) {
    const max_tokens = 50;
    const temperature = 0.85;
    const model = 'davinci';

    try {
      // Send a request to the OpenAI API to generate text
      const response = await this.openai.createCompletion({
        model,
        prompt2API,
        max_tokens,
        n: 1,
        temperature,
      });
      console.log(`request cost: ${response.data.usage.total_tokens} tokens`);
      // Return the text of the response
      return (response.data.choices[0].text).toString();
    } catch (error) {
      console.log("Something went wrong!");
    }
  }

  return (
    <div className="App">
      <div className="title">
        <h1>Autom8ed Documentation</h1>
      </div>
      <header className="App-header">

        <div className="gridMain">

          <a className='qu'>Enter a Filename or Query:</a>
          <div className="textfield">
            <TextField placeholder={entryTxt} />
          </div>
          <Submit value={prompt} onClick={handleSubmission} disabled={isDisabled} />
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
