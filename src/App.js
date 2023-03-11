import './App.css';
import { useState } from "react";
import { Variable } from "./Variable"

//Ideas:
//One of the inputs are dedicated to decide how many variables are in the term
//Select that many variable names from an array with possibles.
//Create a recursive function that will follow the rules of lambda terms
//Maybe also have a variable with minimum length?


function App() {
  const [ result, setResult ] = useState('');
  const [ variable1, setVariable1 ] = useState(2);

  const testSetter = () => setResult("This is a lambda term");
  const variableTest = (update) => {
    setVariable1(update);
    setResult(update);
  }

  return (
    <div className="container">
      <div className="generator-container">
        <div className="headline">
          <h1>Lambda Term Generator</h1>
        </div>
        <div className="divElement">
          <input type="text" className="element" readOnly value={result}/>
        </div>
        <Variable label="Some Variable" value={variable1} onChange={variableTest} />
        <div className="divElement">
          <button onClick={testSetter} className="element">Click</button>
        </div>
      </div>
    </div>
  );
}

export default App;
