import { useState } from "react";

export default function Advanced() {
  const [advancedInput, setAdvancedInput] = useState("");
  const [secondaryAdvancedInput, setSecondaryAdvancedInput] = useState("");

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
    // let integer = parseInt(secondaryAdvancedInput);
    setAdvancedInput("");
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
