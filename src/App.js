import './App.css';
import { useState } from "react";
import { Variable } from "./Variable"
import { AppContainer } from './AppContainer';

function App() {
  const [ result, setResult ] = useState('');
  const [ maxVariableAmount, setMaxVariableAmount ] = useState(3);
  const [ maxLength, setMaxLength ] = useState(2);

  const updateResult = (update) => setResult(update);
  const updateVariableAmount = (update) => setMaxVariableAmount(update);
  const updateMaxLength = (update) => setMaxLength(update);

  return (
    <div className="container">
      <div className="generator-container">
        <div className="headline">
          <h1>Lambda Term Generator</h1>
        </div>
        <div className="divElement">
          <input type="text" className="element" readOnly value={result}/>
        </div>
        <Variable label="Max variable amount" value={maxVariableAmount} onChange={updateVariableAmount} />
        <Variable label="Max length" value={maxLength} onChange={updateMaxLength} />
        <AppContainer maxVariableAmount={maxVariableAmount} maxLength={maxLength} onClick={updateResult}/>
      </div>
    </div>
  );
}

export default App;
