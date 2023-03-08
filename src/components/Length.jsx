import {useState, useEffect} from "react"

export default function Length(){
    const [ lengthInput, setLengthInput ] = useState("")
    const [ secondLengthInput, setSecondLengthInput ] = useState("")
    const [ option1, setOption1 ] = useState("centimeter")
    const [ option2, setOption2 ] = useState("centimeter")


    useEffect(() => {
        if(option1 === "meter" && option2 === "centimeter"){
            setSecondLengthInput(parseInt(lengthInput) * 1000)
        // centimeters to ....
        } else if(option1 === "centimeter" && option2 === "meter"){
            setSecondLengthInput(parseInt(lengthInput) * 0.01)
        } else if(option1 === "centimeter" && option2 === "inch"){
          setSecondLengthInput(parseInt(lengthInput) / 2.54)
        } else if(option1 === "centimeter" && option2 === "kilometer"){
          setSecondLengthInput(parseInt(lengthInput) /100000)
        // inches to ....
        } else if(option1 === "inch" && option2 === "centimeter"){
          setSecondLengthInput(parseInt(lengthInput) * 2.54)
        } else if(option1 === "inch" && option2 === "meter"){
          setSecondLengthInput(parseInt(lengthInput) / 39.37)
        } else if(option1 === "inch" && option2 === "kilometer"){
          setSecondLengthInput(parseInt(lengthInput) / 393.70)
          // meters to ....
        } else if(option1 === "meter" && option2 === "inch"){
          setSecondLengthInput(parseInt(lengthInput) * 39.37)
        } else if(option1 === "meter" && option2 === "kilometer"){
          setSecondLengthInput(parseInt(lengthInput) * 1000)
          // kilometers to ....
        } else if(option1 === "kilometer" && option2 === "centimeter"){
          setSecondLengthInput(parseInt(lengthInput) * 100000)
        } else if(option1 === "kilometer" && option2 === "meter"){
          setSecondLengthInput(parseInt(lengthInput) * 1000)
        } else if(option1 === "kilometer" && option2 === "inch"){
          setSecondLengthInput(parseInt(lengthInput) * 39370.1)
        }
    },[lengthInput, option1, option2])

    const resetLengthInput = () => {
        setLengthInput("")
        setSecondLengthInput("")
    }

    return(
        <div>
            <input disabled="true" className='lengthInput' value={lengthInput}></input>
            <select className="lengthOption" >
                <option  onClick={() => {setOption1("centimeter")}} >centimeter</option>
                <option  onClick={() => {setOption1("meter")}} >meter</option>
                <option  onClick={() => {setOption1("kilometer")}} >kilometer</option>
                <option  onClick={() => {setOption1("inch")}} >inch</option>
            </select> 
            <input disabled="true" className='lengthInput' value={secondLengthInput}></input>
            <select className="lengthOption" >
                <option  onClick={() => {setOption2("centimeter")}} >centimeter</option>
                <option  onClick={() => {setOption2("meter")}} >meter</option>
                <option  onClick={() => {setOption2("kilometer")}} >kilometer</option>
                <option  onClick={() => {setOption2("inch")}} >inch</option>
            </select>
            <div className='buttonsContainer' >
        <div className='buttons'>
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
            <button style={{color: "orange"}} onClick={resetLengthInput} >AC</button>
            <button style={{color: "orange"}} onClick={() => setLengthInput(lengthInput.slice(0, -1))} >C</button>
            <button onClick={() => setLengthInput(lengthInput.concat(0))} >0</button>
            <button onClick={() => setLengthInput(lengthInput.concat("."))} >.</button>
          </div>
        </div>
      </div>
    )
}