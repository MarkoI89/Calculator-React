import { useState, useEffect } from "react";

export default function Length() {
  const [lengthInput, setLengthInput] = useState("");
  const [secondLengthInput, setSecondLengthInput] = useState("");
  const [option1, setOption1] = useState("centimeter");
  const [option2, setOption2] = useState("centimeter");

  useEffect(() => {
    if (lengthInput === "") {
      setSecondLengthInput("");
    } else if (option1 === option2){
      setSecondLengthInput(parseInt(lengthInput));
      // centimeters to ....
    }else if (option1 === "centimeter" && option2 === "meter") {
      setSecondLengthInput(parseInt(lengthInput) * 0.01);
    } else if (option1 === "centimeter" && option2 === "inch") {
      setSecondLengthInput(parseInt(lengthInput) / 2.54);
    } else if (option1 === "centimeter" && option2 === "kilometer") {
      setSecondLengthInput(parseInt(lengthInput) / 100000);
    } else if (option1 === "centimeter" && option2 === "feet") {
      setSecondLengthInput(parseInt(lengthInput) / 30.48);
    } else if (option1 === "centimeter" && option2 === "mile") {
      setSecondLengthInput(parseInt(lengthInput) * 0.0000062137119224);
    }
    // inches to ....63,360
    else if (option1 === "inch" && option2 === "centimeter") {
      setSecondLengthInput(parseInt(lengthInput) * 2.54);
    } else if (option1 === "inch" && option2 === "meter") {
      setSecondLengthInput(parseInt(lengthInput) / 39.37);
    } else if (option1 === "inch" && option2 === "kilometer") {
      setSecondLengthInput(parseInt(lengthInput) / 393.7);
    } else if (option1 === "inch" && option2 === "feet") {
      setSecondLengthInput(parseInt(lengthInput) / 12);
    } else if (option1 === "inch" && option2 === "mile") {
      setSecondLengthInput(parseInt(lengthInput) / 63.36);
      // meters to ...
    } else if (option1 === "meter" && option2 === "centimeter") {
      setSecondLengthInput(parseInt(lengthInput) * 1000);
    } else if (option1 === "meter" && option2 === "inch") {
      setSecondLengthInput(parseInt(lengthInput) * 39.37);
    } else if (option1 === "meter" && option2 === "kilometer") {
      setSecondLengthInput(parseInt(lengthInput) * 1000);
    } else if (option1 === "meter" && option2 === "feet") {
      setSecondLengthInput(parseInt(lengthInput) * 3.28084);
    } else if (option1 === "meter" && option2 === "mile") {
      setSecondLengthInput(parseInt(lengthInput) * 0.00062137);
      // kilometers to ....
    } else if (option1 === "kilometer" && option2 === "centimeter") {
      setSecondLengthInput(parseInt(lengthInput) * 100000);
    } else if (option1 === "kilometer" && option2 === "meter") {
      setSecondLengthInput(parseInt(lengthInput) * 1000);
    } else if (option1 === "kilometer" && option2 === "inch") {
      setSecondLengthInput(parseInt(lengthInput) * 39370.1);
    } else if (option1 === "kilometer" && option2 === "feet") {
      setSecondLengthInput(parseInt(lengthInput) * 3280.8398950131);
    } else if (option1 === "kilometer" && option2 === "mile") {
      setSecondLengthInput(parseInt(lengthInput) * 0.62137119);
      // feet to ....
    } else if (option1 === "feet" && option2 === "centimeter") {
      setSecondLengthInput(parseInt(lengthInput) * 30.48);
    } else if (option1 === "feet" && option2 === "meter") {
      setSecondLengthInput(parseInt(lengthInput) * 3.28084);
    } else if (option1 === "feet" && option2 === "kilometer") {
      setSecondLengthInput(parseInt(lengthInput) / 3280.8398950131);
    } else if (option1 === "feet" && option2 === "inch") {
      setSecondLengthInput(parseInt(lengthInput) * 12);
    } else if (option1 === "feet" && option2 === "mile") {
      setSecondLengthInput(parseInt(lengthInput) * 0.0001894);
      // mile to ....
    } else if (option1 === "mile" && option2 === "centimeter") {
      setSecondLengthInput(parseInt(lengthInput) * 160934.4);
    } else if (option1 === "mile" && option2 === "meter") {
      setSecondLengthInput(parseInt(lengthInput) * 1609.344);
    } else if (option1 === "mile" && option2 === "kilometer") {
      setSecondLengthInput(parseInt(lengthInput) * 1.609344);
    } else if (option1 === "mile" && option2 === "inch") {
      setSecondLengthInput(parseInt(lengthInput) * 63360);
    }  else if (option1 === "mile" && option2 === "feet") {
      setSecondLengthInput(parseInt(lengthInput) * 5280);
    }
  }, [lengthInput, option1, option2]);

  const resetLengthInput = () => {
    setLengthInput("");
    setSecondLengthInput("");
  };

  return (
    <div>
      <input
        disabled="true"
        className="lengthInput"
        value={lengthInput}
      ></input>
      <select className="lengthOption">
        <option
          onClick={() => {
            setOption1("centimeter");
          }}
          onChange={() => {
            setOption1("centimeter");
          }}
        >
          centimeter
        </option>
        <option
          onClick={() => {
            setOption1("meter");
          }}
          onChange={() => {
            setOption1("meter");
          }}
        >
          meter
        </option>
        <option
          onClick={() => {
            setOption1("kilometer");
          }}
          onChange={() => {
            setOption1("kilometer");
          }}
        >
          kilometer
        </option>
        <option
          onClick={() => {
            setOption1("inch");
          }}
          onChange={() => {
            setOption1("inch");
          }}
        >
          inch
        </option>
        <option
          onClick={() => {
            setOption1("feet");
          }}
          onChange={() => {
            setOption1("feet");
          }}
        >
          feet
        </option>
        <option
          onClick={() => {
            setOption1("mile");
          }}
          onChange={() => {
            setOption1("mile");
          }}
        >
          mile
        </option>
      </select>
      <input
        disabled="true"
        className="lengthInput"
        value={secondLengthInput}
      ></input>
      <select className="lengthOption">
        <option
          onClick={() => {
            setOption2("centimeter");
          }}
          onChange={() => {
            setOption2("centimeter");
          }}
        >
          centimeter
        </option>
        <option
          onClick={() => {
            setOption2("meter");
          }}
          onChange={() => {
            setOption2("meter");
          }}
        >
          meter
        </option>
        <option
          onClick={() => {
            setOption2("kilometer");
          }}
          onChange={() => {
            setOption2("kilometer");
          }}
        >
          kilometer
        </option>
        <option
          onClick={() => {
            setOption2("inch");
          }}
          onChange={() => {
            setOption2("inch");
          }}
        >
          inch
        </option>
        <option
          onClick={() => {
            setOption2("feet");
          }}
          onChange={() => {
            setOption2("feet");
          }}
        >
          feet
        </option>
        <option
          onClick={() => {
            setOption2("mile");
          }}
          onChange={() => {
            setOption2("mile");
          }}
        >
          mile
        </option>
      </select>
      <div className="buttonsContainer">
        <div className="buttons"></div>
        <div className="buttons">
          <button onClick={() => setLengthInput(lengthInput.concat(7))}>
            7
          </button>
          <button onClick={() => setLengthInput(lengthInput.concat(8))}>
            8
          </button>
          <button onClick={() => setLengthInput(lengthInput.concat(9))}>
            9
          </button>
        </div>
        <div className="buttons">
          <button onClick={() => setLengthInput(lengthInput.concat(4))}>
            4
          </button>
          <button onClick={() => setLengthInput(lengthInput.concat(5))}>
            5
          </button>
          <button onClick={() => setLengthInput(lengthInput.concat(6))}>
            6
          </button>
        </div>
        <div className="buttons">
          <button onClick={() => setLengthInput(lengthInput.concat(1))}>
            1
          </button>
          <button onClick={() => setLengthInput(lengthInput.concat(2))}>
            2
          </button>
          <button onClick={() => setLengthInput(lengthInput.concat(3))}>
            3
          </button>
        </div>
        <div className="buttons">
          <button style={{ color: "orange" }} onClick={resetLengthInput}>
            AC
          </button>
          <button
            style={{ color: "orange" }}
            onClick={() => setLengthInput(lengthInput.slice(0, -1))}
          >
            C
          </button>
          <button onClick={() => setLengthInput(lengthInput.concat(0))}>
            0
          </button>
          <button onClick={() => setLengthInput(lengthInput.concat("."))}>
            .
          </button>
        </div>
      </div>
    </div>
  );
}
