import "../App.css";
import { useState } from "react";

function Standard() {
  const [inputValue, setInputValue] = useState(""); //input which shows result of the operation
  const [secondaryInput, setSecondaryInput] = useState(""); //input which shows the operation
  const [memory1, setMemory1] = useState(null); //first memorized value
  const [memory2, setMemory2] = useState(null); //second memorized value
  const [memory3, setMemory3] = useState(null); //third memorized value
  const [memoryModal, setMemoryModal] = useState(null); //modal which shows memorized values
  const [memory1selected, setMemory1Selected] = useState(null); //first memory is selected for further operations
  const [memory2selected, setMemory2Selected] = useState(null); //second memory is selected for further operations
  const [memory3selected, setMemory3Selected] = useState(null); //third memory is selected for further operations
  const [trashCan1, setTrashCan1] = useState(null); //shows trash can next to first memorized value when hovering on
  const [trashCan2, setTrashCan2] = useState(null); //shows trash can next to second memorized value when hovering on
  const [trashCan3, setTrashCan3] = useState(null); //shows trash can next to third memorized value when hovering on

  const handleResult = () => { //shows the result of the operation
    setSecondaryInput(inputValue);
    setInputValue(eval(inputValue));
  };

  const handleReset = () => { // reset all input values
    setInputValue("");
    setSecondaryInput("");
  };

  const sumMemory = () => { // sum selected memorized value by input value
    if (inputValue === "") {
      return;
    } else if (!memory1) {
      setMemory1(parseInt(inputValue));
    } else if (memory3selected) {
      setMemory3(memory3 + parseInt(inputValue));
    } else if (memory2selected) {
      setMemory2(memory2 + parseInt(inputValue));
    } else if (memory1selected) {
      setMemory1(memory1 + parseInt(inputValue));
    } else if (memory3) {
      setMemory3(memory3 + parseInt(inputValue));
    } else if (memory2) {
      setMemory2(memory2 + parseInt(inputValue));
    } else if (memory1) {
      setMemory1(memory1 + parseInt(inputValue));
    }
  };

  const subtractMemory = () => { // subtract selected memorized value by input value
    if (inputValue === "") {
      return;
    } else if (memory3selected) {
      setMemory3(memory3 - parseInt(inputValue));
    } else if (memory2selected) {
      setMemory2(memory2 - parseInt(inputValue));
    } else if (memory1selected) {
      setMemory1(memory1 - parseInt(inputValue));
    } else if (memory3) {
      setMemory3(memory3 - parseInt(inputValue));
    } else if (memory2) {
      setMemory2(memory2 - parseInt(inputValue));
    } else if (memory1) {
      setMemory1(memory1 - parseInt(inputValue));
    }
  };

  const addNewMemory = () => {        //add new memory value (3 memory values are available)
    if (!memory1 && !memory2 && !memory3) {
      return;
    } else if (memory1 && memory2 && memory3) {
      return;
    } else if (memory1 && !memory2) {
      setMemory2(parseInt(inputValue));
    } else if (memory1 && memory2) {
      setMemory3(parseInt(inputValue));
    }
  };

  const handleMemoryReset = () => {       //removes all memorized values 
    if (memory1 || memory2 || memory3) {
      setMemory1(null);
      setMemory2(null);
      setMemory3(null);
      setMemory1Selected(null);
      setMemory2Selected(null);
      setMemory3Selected(null);
    } else {
      return;
    }
  };

  const handleMemoryRecall = () => {      // gives value of selected memory to the input
    if (memory3) {
      setInputValue(memory3);
    } else if (!memory3) {
      setInputValue(memory2);
    } else if (!memory2) {
      setInputValue(memory1);
    } else if (!memory1) {
      return;
    }
  };

  const clickMemory1 = () => {           //select first memory
    setMemory1Selected(true);
    setMemory2Selected(null);
    setMemory3Selected(null);
  };

  const clickMemory2 = () => {           //select second memory
    setMemory1Selected(null);
    setMemory2Selected(true);
    setMemory3Selected(null);
  };

  const clickMemory3 = () => {           //select third memory
    setMemory1Selected(null);
    setMemory2Selected(null);
    setMemory3Selected(true);
  };

  const memoryMouseEnter1 = () => {     //shows trash can next to first memory value when hover
    setTrashCan1(true);
  };

  const memoryMouseLeave1 = () => {     //hides trash can from first memory when not hover
    setTrashCan1(null);
  };

  const memoryMouseEnter2 = () => {      //shows trash can next to second memory value when hover
    setTrashCan2(true);
  };

  const memoryMouseLeave2 = () => {      //hides trash can from second memory when not hover
    setTrashCan2(null);
  };

  const memoryMouseEnter3 = () => {     //shows trash can next to third memory value when hover
    setTrashCan3(true);
  };

  const memoryMouseLeave3 = () => {     //hides trash can from third memory when not hover
    setTrashCan3(null);
  };

  const style = {                       //transparent background style for memory buttons
    backgroundColor: "transparent",
  };

  const disabledButton = {              //style for buttons when function is disabled
    backgroundColor: "transparent",
    color: "gray",
  };

  return (
    <div>
      <div>
        <input
          disabled="true"
          className="secondaryInput"
          value={secondaryInput}
        ></input>
        <input disabled="true" className="mainInput" value={inputValue}></input>
      </div>
      <div className="memory">
        <button
          onClick={handleMemoryReset}
          style={!memory1 && !memory2 && !memory3 ? disabledButton : style}
        >
          MC
        </button>
        <button
          onClick={handleMemoryRecall}
          style={!memory1 && !memory2 && !memory3 ? disabledButton : style}
        >
          MR
        </button>
        <button style={style} onClick={sumMemory}>
          M+
        </button>
        <button onClick={subtractMemory} style={style}>
          M-
        </button>
        <button style={style} onClick={addNewMemory}>
          MS
        </button>
        <button
          style={!memory1 && !memory2 && !memory3 ? disabledButton : style}
          onClick={
            !memoryModal
              ? () => setMemoryModal(true)
              : () => setMemoryModal(null)
          }
        >
          M
        </button>
      </div>
      {memoryModal && (
        <div className="memoryModal">
          {!memory1 && !memory2 && !memory3 ? <p>No memorized values</p> : null}
          {memory3 && (
            <div
              className="memoryContainer"
              onMouseLeave={memoryMouseLeave3}
              onMouseEnter={memoryMouseEnter3}
              onClick={clickMemory3}
            >
              {trashCan3 && (    
                <svg
                  onClick={() => {setMemory3(null); setMemory3Selected(null); }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />{" "}
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />{" "}
                </svg>
              )}
              <p>{memory3}</p>
            </div>
          )}
          {memory2 && (
            <div
              className="memoryContainer"
              onMouseLeave={memoryMouseLeave2}
              onMouseEnter={memoryMouseEnter2}
              onClick={clickMemory2}
            >
              {trashCan2 && (
                <svg
                  onClick={() => {setMemory2(null); setMemory2Selected(null);}}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />{" "}
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />{" "}
                </svg>
              )}
              <p>{memory2}</p>
            </div>
          )}
          {memory1 && (
            <div
              className="memoryContainer"
              onMouseLeave={memoryMouseLeave1}
              onMouseEnter={memoryMouseEnter1}
              onClick={clickMemory1}
            >
              {trashCan1 && (
                <svg
                  onClick={() => {setMemory1(null); setMemory1Selected(null);}}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />{" "}
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />{" "}
                </svg>
              )}
              <p>{memory1}</p>
            </div>
          )}
        </div>
      )}
      <div className="buttonsContainer">
        <div className="buttons">
          <button
            style={{ color: "orange" }}
            onClick={() => setInputValue(inputValue.slice(0, -1))}
          >
            C
          </button>
          <button
            style={{ color: "orange" }}
            onClick={() => setInputValue(inputValue.concat("("))}
          >
            (
          </button>
          <button
            style={{ color: "orange" }}
            onClick={() => setInputValue(inputValue.concat(")"))}
          >
            {" "}
            ){" "}
          </button>
          <button
            style={{ color: "orange" }}
            onClick={() => setInputValue(inputValue.concat("/"))}
          >
            /
          </button>
        </div>
        <div className="buttons">
          <button onClick={() => setInputValue(inputValue.concat(7))}>7</button>
          <button onClick={() => setInputValue(inputValue.concat(8))}>8</button>
          <button onClick={() => setInputValue(inputValue.concat(9))}>9</button>
          <button
            style={{ color: "orange" }}
            onClick={() => setInputValue(inputValue.concat("*"))}
          >
            x
          </button>
        </div>
        <div className="buttons">
          <button onClick={() => setInputValue(inputValue.concat(4))}>4</button>
          <button onClick={() => setInputValue(inputValue.concat(5))}>5</button>
          <button onClick={() => setInputValue(inputValue.concat(6))}>6</button>
          <button
            style={{ color: "orange" }}
            onClick={() => setInputValue(inputValue.concat("-"))}
          >
            -
          </button>
        </div>
        <div className="buttons">
          <button onClick={() => setInputValue(inputValue.concat(1))}>1</button>
          <button onClick={() => setInputValue(inputValue.concat(2))}>2</button>
          <button onClick={() => setInputValue(inputValue.concat(3))}>3</button>
          <button
            style={{ color: "orange" }}
            onClick={() => setInputValue(inputValue.concat("+"))}
          >
            +
          </button>
        </div>
        <div className="buttons">
          <button style={{ color: "orange" }} onClick={handleReset}>
            AC
          </button>
          <button onClick={() => setInputValue(inputValue.concat(0))}>0</button>
          <button onClick={() => setInputValue(inputValue.concat("."))}>
            .
          </button>
          <button style={{ color: "orange" }} onClick={handleResult}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Standard;
