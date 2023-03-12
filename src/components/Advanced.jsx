import { useState } from "react";

export default function Advanced() {
  const [advancedInput, setAdvancedInput] = useState("");
  const [secondaryAdvancedInput, setSecondaryAdvancedInput] = useState("");
  const [memory1, setMemory1] = useState(null);
  const [memory2, setMemory2] = useState(null);
  const [memory3, setMemory3] = useState(null);
  const [memoryModal, setMemoryModal] = useState(null);
  const [memory1selected, setMemory1Selected] = useState(null);
  const [memory2selected, setMemory2Selected] = useState(null);
  const [memory3selected, setMemory3Selected] = useState(null);
  const [trashCan1, setTrashCan1] = useState(null)
  const [trashCan2, setTrashCan2] = useState(null)
  const [trashCan3, setTrashCan3] = useState(null)

  const handleResult = () => {
    setSecondaryAdvancedInput(advancedInput);
    setAdvancedInput(eval(advancedInput));
    if (secondaryAdvancedInput.includes("^")) {
      setSecondaryAdvancedInput(
        secondaryAdvancedInput.substring(0, secondaryAdvancedInput.length - 1)
      );
      let integer = parseInt(secondaryAdvancedInput);
      setAdvancedInput(Math.pow(integer, advancedInput));
      setSecondaryAdvancedInput(`${integer}^${advancedInput}=`);
    }
  };

  const handleReset = () => {
    setAdvancedInput("");
    setSecondaryAdvancedInput("");
  };

  const handlePercent = () => {
    let integer = eval(advancedInput)
    setAdvancedInput(integer / 100)
    setSecondaryAdvancedInput(`${advancedInput}%`);
  };

  const handleSquare = () => {
    let integer = parseInt(advancedInput);
    setAdvancedInput(Math.pow(integer, 2));
  };

  const handleXY = () => {
    setSecondaryAdvancedInput(`${advancedInput}^`);
    setAdvancedInput("");
  };

  const sumMemory = () => {
    if(advancedInput === ""){
      return
    }  else if (!memory1) {
      setMemory1(parseInt(advancedInput));
    } else if (memory3selected) {
      setMemory3(memory3 + parseInt(advancedInput));
    } else if (memory2selected) {
      setMemory2(memory2 + parseInt(advancedInput));
    } else if (memory1selected) {
      setMemory1(memory1 + parseInt(advancedInput));
    } else if (memory3) {
      setMemory3(memory3 + parseInt(advancedInput));
    } else if (memory2) {
      setMemory2(memory2 + parseInt(advancedInput));
    } else if (memory1) {
      setMemory1(memory1 + parseInt(advancedInput));
    } else if (advancedInput === "") {
      return;
    }
  };

  const subtractMemory = () => {
    if(advancedInput === ""){
      return
    }  else if (memory3selected) {
      setMemory3(memory3 - parseInt(advancedInput));
    } else if (memory2selected) {
      setMemory2(memory2 - parseInt(advancedInput));
    } else if (memory1selected) {
      setMemory1(memory1 - parseInt(advancedInput));
    } else if (memory3) {
      setMemory3(memory3 - parseInt(advancedInput));
    } else if (memory2) {
      setMemory2(memory2 - parseInt(advancedInput));
    } else if (memory1) {
      setMemory1(memory1 - parseInt(advancedInput));
    } 
  };

  const addNewMemory = () => {
    if (!memory1 && !memory2 && !memory3) {
      return;
    } else if (memory1 && memory2 && memory3) {
      return;
    } else if (memory1 && !memory2) {
      setMemory2(parseInt(advancedInput));
    } else if (memory1 && memory2) {
      setMemory3(parseInt(advancedInput));
    }
  };

  const handleMemoryReset = () => {
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

  const handleMemoryRecall = () => {
    if (memory3) {
      setAdvancedInput(memory3);
    } else if (!memory3) {
      setAdvancedInput(memory2);
    } else if (!memory2) {
      setAdvancedInput(memory1);
    } else if (!memory1) {
      return;
    }
  };

  const clickMemory1 = () => {
    setMemory1Selected(true);
    setMemory2Selected(null);
    setMemory3Selected(null);
  };

  const clickMemory2 = () => {
    setMemory1Selected(null);
    setMemory2Selected(true);
    setMemory3Selected(null);
  };

  const clickMemory3 = () => {
    setMemory1Selected(null);
    setMemory2Selected(null);
    setMemory3Selected(true);
  };

  const memoryMouseEnter1 = () => {
    setTrashCan1(true)
  };

  const memoryMouseLeave1 = () => {
    setTrashCan1(null)
  };

  const memoryMouseEnter2 = () => {
    setTrashCan2(true)
  };

  const memoryMouseLeave2 = () => {
    setTrashCan2(null)
  };

  const memoryMouseEnter3 = () => {
    setTrashCan3(true)
  };

  const memoryMouseLeave3 = () => {
    setTrashCan3(null)
  };

  const style = {
    backgroundColor: "transparent",
  };

  const disabledButton = {
    backgroundColor: "transparent",
    color: "gray",
  };

  return (
    <div>
      <div>
        <input
          disabled="true"
          className="secondaryInput"
          value={secondaryAdvancedInput}
        ></input>
        <input
          disabled="true"
          className="mainInput"
          value={advancedInput}
        ></input>
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
        <div className="advancedMemoryModal">
          {!memory1 && !memory2 && !memory3 ? <p>No memorized values</p> : null}
          {memory3 && 
            <div
              className="memoryContainer"
              onMouseLeave={memoryMouseLeave3}
              onMouseEnter={memoryMouseEnter3}
              onClick={clickMemory3}
            >
              {trashCan3 && <svg
                onClick={() => { setMemory3(null); setMemory3Selected(null); }}
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
              </svg>}
              <p>{memory3}</p>
            </div>}
          {memory2 && 
            <div 
              className="memoryContainer"
              onMouseLeave={memoryMouseLeave2}
              onMouseEnter={memoryMouseEnter2}
              onClick={clickMemory2}
              >
            {trashCan2 && <svg
                onClick={() => { setMemory2(null); setMemory2Selected(null); }}
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
              </svg>}
            <p>{memory2}</p>
          </div>}
          {memory1 && (
            <div
              className="memoryContainer"
              onMouseLeave={memoryMouseLeave1}
              onMouseEnter={memoryMouseEnter1}
              onClick={clickMemory1}
            >
              {trashCan1 && <svg
                onClick={() => {setMemory1(null); setMemory1Selected(null); }}
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
              </svg>}
              <p>
                {memory1}
              </p>
            </div>
          )}
        </div>
      )}
      <div className="buttonsContainer">
        <div className="buttons">
          <button
            style={{ color: "orange" }}
            onClick={() => {
              setAdvancedInput(Math.sqrt(advancedInput));
              setSecondaryAdvancedInput(`√${advancedInput}`);
            }}
          >
            √
          </button>
          <button style={{ color: "orange" }} onClick={handlePercent}>
            %
          </button>
          <button style={{ color: "orange" }} onClick={handleSquare}>
            x²
          </button>
          <button style={{ color: "orange" }} onClick={handleXY}>
            xʸ
          </button>
        </div>
        <div className="buttons">
          <button
            style={{ color: "orange" }}
            onClick={() => setAdvancedInput(advancedInput.slice(0, -1))}
          >
            C
          </button>
          <button
            style={{ color: "orange" }}
            onClick={() => setAdvancedInput(advancedInput.concat("("))}
          >
            (
          </button>
          <button
            style={{ color: "orange" }}
            onClick={() => setAdvancedInput(advancedInput.concat(")"))}
          >
            {" "}
            ){" "}
          </button>
          <button
            style={{ color: "orange" }}
            onClick={() => setAdvancedInput(advancedInput.concat("/"))}
          >
            /
          </button>
        </div>
        <div className="buttons">
          <button onClick={() => setAdvancedInput(advancedInput.concat(7))}>
            7
          </button>
          <button onClick={() => setAdvancedInput(advancedInput.concat(8))}>
            8
          </button>
          <button onClick={() => setAdvancedInput(advancedInput.concat(9))}>
            9
          </button>
          <button
            style={{ color: "orange" }}
            onClick={() => setAdvancedInput(advancedInput.concat("*"))}
          >
            x
          </button>
        </div>
        <div className="buttons">
          <button onClick={() => setAdvancedInput(advancedInput.concat(4))}>
            4
          </button>
          <button onClick={() => setAdvancedInput(advancedInput.concat(5))}>
            5
          </button>
          <button onClick={() => setAdvancedInput(advancedInput.concat(6))}>
            6
          </button>
          <button
            style={{ color: "orange" }}
            onClick={() => setAdvancedInput(advancedInput.concat("-"))}
          >
            -
          </button>
        </div>
        <div className="buttons">
          <button onClick={() => setAdvancedInput(advancedInput.concat(1))}>
            1
          </button>
          <button onClick={() => setAdvancedInput(advancedInput.concat(2))}>
            2
          </button>
          <button onClick={() => setAdvancedInput(advancedInput.concat(3))}>
            3
          </button>
          <button
            style={{ color: "orange" }}
            onClick={() => setAdvancedInput(advancedInput.concat("+"))}
          >
            +
          </button>
        </div>
        <div className="buttons">
          <button style={{ color: "orange" }} onClick={handleReset}>
            AC
          </button>
          <button onClick={() => setAdvancedInput(advancedInput.concat(0))}>
            0
          </button>
          <button onClick={() => setAdvancedInput(advancedInput.concat("."))}>
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
