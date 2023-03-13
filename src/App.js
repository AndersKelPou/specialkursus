import './App.css';
import { useState } from "react";
import { Variable } from "./Variable"
import { AppContainer } from './AppContainer';
import 'bulma/css/bulma.css';

function App() {
  const [ result, setResult ] = useState('');
  const [ maxVariableAmount, setMaxVariableAmount ] = useState(3);
  const [ minLength, setMinLength ] = useState(2);
  const [ maxLength, setMaxLength ] = useState(2);

  const updateResult = (update) => setResult(update);
  const updateVariableAmount = (update) => setMaxVariableAmount(update);
  const updateMinLength = (update) => setMinLength(update);
  const updateMaxLength = (update) => setMaxLength(update);

  return (
    <div className="container">
      <div className="generator-container">
        <div className="headline">
          <h1 className="title">Lambda Term Generator</h1>
        </div>
        <div className="outputBox">
          <input type="text" className="input" readOnly value={result} placeholder="Lambda-term"/>
          
        </div>
        <AppContainer maxVariableAmount={maxVariableAmount} minLength={minLength} maxLength={maxLength} onClick={updateResult}/>
        <Variable label = "Max variable amount" minValue="1" maxValue="14" value={maxVariableAmount} onChange={updateVariableAmount} />
        <Variable label = "Min length" minValue="1" maxValue="14" value={minLength} onChange={updateMinLength} />
        <Variable label = "Max length" minValue="1" maxValue="14" value={maxLength} onChange={updateMaxLength} />
      </div>
    </div>
  );
}

export default App;
