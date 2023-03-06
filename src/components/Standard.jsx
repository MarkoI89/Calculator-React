
import '../App.css';
import {useState} from "react"

function Standard() {
  const [ inputValue, setInputValue ] = useState("")
  const [ secondaryInput, setSecondaryInput ] = useState("")


  const handleResult = () => {
    setSecondaryInput(inputValue)
    setInputValue(eval(inputValue))
  }

  const handleReset = () => {
    setInputValue("") 
    setSecondaryInput("")
  }

  return (
    <div>
      <div>
        <input disabled="true" className='secondaryInput' value={secondaryInput}></input>
        <input disabled="true" className='mainInput' value={inputValue}></input>
      </div>
      <div className='buttonsContainer' >
        <div className='buttons'>
          <button style={{color: "orange"}} onClick={() => setInputValue(inputValue.slice(0, -1))} >C</button>
          <button style={{color: "orange"}} onClick={() => setInputValue(inputValue.concat("("))} >(</button>
          <button style={{color: "orange"}} onClick={() => setInputValue(inputValue.concat(")"))} > ) </button>
          <button style={{color: "orange"}} onClick={() => setInputValue(inputValue.concat("/"))} >/</button>
        </div>
        <div className='buttons' >
          <button onClick={() => setInputValue(inputValue.concat(7))} >7</button>
          <button onClick={() => setInputValue(inputValue.concat(8))} >8</button>
          <button onClick={() => setInputValue(inputValue.concat(9))} >9</button>
          <button  style={{color: "orange"}} onClick={() => setInputValue(inputValue.concat("*"))}>x</button>
        </div>
        <div className='buttons' >
          <button onClick={() => setInputValue(inputValue.concat(4))} >4</button>
          <button onClick={() => setInputValue(inputValue.concat(5))} >5</button>
          <button onClick={() => setInputValue(inputValue.concat(6))} >6</button>
          <button  style={{color: "orange"}} onClick={() => setInputValue(inputValue.concat("-"))} >-</button>
        </div>
        <div className='buttons' >
          <button onClick={() => setInputValue(inputValue.concat(1))} >1</button>
          <button onClick={() => setInputValue(inputValue.concat(2))} >2</button>
          <button onClick={() => setInputValue(inputValue.concat(3))} >3</button>
          <button style={{color: "orange"}} onClick={() => setInputValue(inputValue.concat("+"))} >+</button>
        </div>
        <div className='buttons' >
          {/* <button onClick={() => setInputValue(Math.sqrt(inputValue))} >√</button> */}
          <button style={{color: "orange"}} onClick={handleReset} >AC</button>
          <button onClick={() => setInputValue(inputValue.concat(0))} >0</button>
          <button onClick={() => setInputValue(inputValue.concat("."))} >.</button>
          <button style={{color: "orange"}} onClick={handleResult} >=</button>
        </div>
      </div>
    </div>
  );
}

export default Standard;