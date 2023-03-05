
import './App.css';
import {useState} from "react"

function App() {
  const [ inputValue, setInputValue ] = useState("")

  return (
    <div className="App">
      <div>
        <input value={inputValue}></input>
      </div>
      <div>
        <button onClick={() => setInputValue(inputValue.slice(0, -1))} >C</button>
        <button onClick={() => setInputValue(inputValue.concat("("))} >(</button>
        <button onClick={() => setInputValue(inputValue.concat(")"))} > ) </button>
        <button onClick={() => setInputValue(inputValue.concat("/"))} >/</button>
      </div>
      <div>
        <button onClick={() => setInputValue(inputValue.concat(7))} >7</button>
        <button onClick={() => setInputValue(inputValue.concat(8))} >8</button>
        <button onClick={() => setInputValue(inputValue.concat(9))} >9</button>
        <button onClick={() => setInputValue(inputValue.concat("*"))}>x</button>
      </div>
      <div>
        <button onClick={() => setInputValue(inputValue.concat(4))} >4</button>
        <button onClick={() => setInputValue(inputValue.concat(5))} >5</button>
        <button onClick={() => setInputValue(inputValue.concat(6))} >6</button>
        <button onClick={() => setInputValue(inputValue.concat("-"))} >-</button>
      </div>
      <div>
        <button onClick={() => setInputValue(inputValue.concat(1))} >1</button>
        <button onClick={() => setInputValue(inputValue.concat(2))} >2</button>
        <button onClick={() => setInputValue(inputValue.concat(3))} >3</button>
        <button onClick={() => setInputValue(inputValue.concat("+"))} >+</button>
      </div>
      <div>
        {/* <button onClick={() => setInputValue(Math.sqrt(inputValue))} >√</button> */}
        <button onClick={() => setInputValue("")} >AC</button>
        <button onClick={() => setInputValue(inputValue.concat(0))} >0</button>
        <button onClick={() => setInputValue(inputValue.concat("."))} >.</button>
        <button onClick={() => setInputValue(eval(inputValue))} >=</button>
      </div>
    </div>
  );
}

export default App;
