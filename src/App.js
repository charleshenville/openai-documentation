import TextField from './TextField';
import openai from 'openai';
import './App.css';

function App() {

  // const openai = require('openai');
  // const openaiClient = new openai('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');

  return (
    <div className="App">
      <h1 className="title">OpenAI Doc Generator</h1>
      <header className="App-header">

        <div className="gridMain">

          <a>Enter a Filename or Query:</a>
          <div className="textfield">
            <TextField />
          </div>

        </div>

      </header>
    </div>
  );
}

export default App;
