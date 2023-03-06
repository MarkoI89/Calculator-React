import {useState, useEffect} from "react"

export default function Length(){
    const [ lengthInput, setLengthInput ] = useState("")
    const [ secondLengthInput, setSecondLengthInput ] = useState("")
    const [ option1, setOption1 ] = useState("centimeter")
    const [ option2, setOption2 ] = useState("centimeter")


    useEffect(() => {
        if(option1 === "meter" && option2 === "centimeter"){
            setSecondLengthInput(parseInt(lengthInput) * 1000)
            console.log(parseInt(lengthInput) * 1000)
        } else if(option1 === "centimeter" && option2 === "meter"){
            setSecondLengthInput(parseInt(lengthInput) * 0.01)
        }
    },[lengthInput, option1, option2])

    const resetLengthInput = () => {
        setLengthInput("")
        setSecondLengthInput("")
    }

    return(
        <div>
            <input disabled="true" className='lengthInput' value={lengthInput}></input>
            <select>
                <option onClick={() => {setOption1("centimeter")}} >centimeter</option>
                <option onClick={() => {setOption1("meter")}} >meter</option>
            </select> 
            <input disabled="true" className='lengthInput' value={secondLengthInput}></input>
            <select>
                <option onClick={() => {setOption2("centimeter")}} >centimeter</option>
                <option onClick={() => {setOption2("meter")}} >meter</option>
            </select>
            <div className='buttonsContainer' >
        <div className='buttons'>
          <button style={{color: "orange"}} onClick={() => setLengthInput(lengthInput.slice(0, -1))} >C</button>
        </div>
        <div className='buttons' >
          <button onClick={() => setLengthInput(lengthInput.concat(7))} >7</button>
          <button onClick={() => setLengthInput(lengthInput.concat(8))} >8</button>
          <button onClick={() => setLengthInput(lengthInput.concat(9))} >9</button>
        </div>
        <div className='buttons' >
          <button onClick={() => setLengthInput(lengthInput.concat(4))} >4</button>
          <button onClick={() => setLengthInput(lengthInput.concat(5))} >5</button>
          <button onClick={() => setLengthInput(lengthInput.concat(6))} >6</button>
        </div>
        <div className='buttons' >
          <button onClick={() => setLengthInput(lengthInput.concat(1))} >1</button>
          <button onClick={() => setLengthInput(lengthInput.concat(2))} >2</button>
          <button onClick={() => setLengthInput(lengthInput.concat(3))} >3</button>
        </div>
        <div className='buttons' >
          {/* <button onClick={() => setLengthInput(Math.sqrt(lengthInput))} >√</button> */}
          <button style={{color: "orange"}} onClick={resetLengthInput} >AC</button>
          <button onClick={() => setLengthInput(lengthInput.concat(0))} >0</button>
          <button onClick={() => setLengthInput(lengthInput.concat("."))} >.</button>
          {/* <button style={{color: "orange"}} onClick={handleResult} >=</button> */}
        </div>
      </div>
        </div>
    )
}