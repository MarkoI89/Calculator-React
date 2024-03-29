import { useState, useEffect } from "react";

export default function Weight() {
  const [weightInput, setWeightInput] = useState(""); // given value for first weight option
  const [secondWeightInput, setSecondWeightInput] = useState(""); // result of conversion between option1 and option2
  const [option1, setOption1] = useState("gram"); // select first weight option
  const [option2, setOption2] = useState("gram"); // select second weight option
  const [optionsModel1, setOptionsModel1] = useState(null);
  const [optionsModel2, setOptionsModel2] = useState(null)

  const resetWeightInput = () => {
    setWeightInput("");
    setSecondWeightInput("");
  };

  useEffect(() => {
    //gives the result just after input value or options get changed
    if (weightInput === "") {
      setSecondWeightInput("");
    } else if (option1 === option2) {
      setSecondWeightInput(parseInt(weightInput));
      // grams to ....
    } else if (option1 === "gram" && option2 === "kilogram") {
      setSecondWeightInput(parseInt(weightInput) * 0.001); // input values are type of string by default and they have to be changed to type of number before calculations
    } else if (option1 === "gram" && option2 === "ounce") {
      setSecondWeightInput(parseInt(weightInput) * 0.035274);
    } else if (option1 === "gram" && option2 === "tonne") {
      setSecondWeightInput(parseInt(weightInput) * 0.000001);
    } else if (option1 === "gram" && option2 === "pound") {
      setSecondWeightInput(parseInt(weightInput) * 0.0022046226);
      // ounces to ....
    } else if (option1 === "ounce" && option2 === "gram") {
      setSecondWeightInput(parseInt(weightInput) * 28.34952);
    } else if (option1 === "ounce" && option2 === "kilogram") {
      setSecondWeightInput(parseInt(weightInput) * 0.028);
    } else if (option1 === "ounce" && option2 === "tonne") {
      setSecondWeightInput(parseInt(weightInput) / 393.7);
    } else if (option1 === "ounce" && option2 === "pound") {
      setSecondWeightInput(parseInt(weightInput) * 0.0625);
      // kilograms to ...
    } else if (option1 === "kilogram" && option2 === "gram") {
      setSecondWeightInput(parseInt(weightInput) * 1000);
    } else if (option1 === "kilogram" && option2 === "ounce") {
      setSecondWeightInput(parseInt(weightInput) * 35.274);
    } else if (option1 === "kilogram" && option2 === "tonne") {
      setSecondWeightInput(parseInt(weightInput) * 1000);
    } else if (option1 === "kilogram" && option2 === "pound") {
      setSecondWeightInput(parseInt(weightInput) * 2.205);
      // tons to ....
    } else if (option1 === "tonne" && option2 === "gram") {
      setSecondWeightInput(parseInt(weightInput) * 1000000);
    } else if (option1 === "tonne" && option2 === "kilogram") {
      setSecondWeightInput(parseInt(weightInput) * 1000);
    } else if (option1 === "tonne" && option2 === "ounce") {
      setSecondWeightInput(parseInt(weightInput) * 35274);
    } else if (option1 === "tonne" && option2 === "pound") {
      setSecondWeightInput(parseInt(weightInput) * 2204.6226218488);
      // pound to ....
    } else if (option1 === "pound" && option2 === "gram") {
      setSecondWeightInput(parseInt(weightInput) * 453.59237);
    } else if (option1 === "pound" && option2 === "kilogram") {
      setSecondWeightInput(parseInt(weightInput) * 0.454);
    } else if (option1 === "pound" && option2 === "tonne") {
      setSecondWeightInput(parseInt(weightInput) / 0.0004535924);
    } else if (option1 === "pound" && option2 === "ounce") {
      setSecondWeightInput(parseInt(weightInput) * 16);
    }
  }, [weightInput, option1, option2]);

  const options = ["gram", "kilogram", "tonne", "ounce", "pound"];
  const weightOptions = options.map((i) => {
    return (
      <div
        className="weightOption"
        onClick={() => {
          setOption1(`${i}`);
          setOptionsModel1(null);
        }}
      >
        {i}
      </div>
    );
  });

  const weightOptions2 = options.map((i) => {
    return (
      <div
        className="weightOption"
        onClick={() => {
          setOption2(`${i}`);
          setOptionsModel2(null);
        }}
      >
        {i}
      </div>
    );
  });

  return (
    <div>
      <input
        disabled="true"
        className="lengthInput"
        value={weightInput}
      ></input>
      <div onClick={() => !optionsModel1 ? setOptionsModel1(true) : setOptionsModel1(null) } className="lengthOption">
        <div>{option1}</div><div>˅</div>
      </div>
      {optionsModel1 && <div className="optionsModal">{weightOptions}</div>}
      <input
        disabled="true"
        className="lengthInput"
        value={secondWeightInput}
      ></input>
      <div onClick={() => !optionsModel2 ? setOptionsModel2(true) : setOptionsModel2(null) } className="lengthOption">
        <div>{option2}</div><div>˅</div>
      </div>
      {optionsModel2 && <div className="optionsModal">{weightOptions2}</div>}
      <div className="buttonsContainer">
        <div className="buttons"></div>
        <div className="buttons">
          <button onClick={() => setWeightInput(weightInput.concat(7))}>
            7
          </button>
          <button onClick={() => setWeightInput(weightInput.concat(8))}>
            8
          </button>
          <button onClick={() => setWeightInput(weightInput.concat(9))}>
            9
          </button>
        </div>
        <div className="buttons">
          <button onClick={() => setWeightInput(weightInput.concat(4))}>
            4
          </button>
          <button onClick={() => setWeightInput(weightInput.concat(5))}>
            5
          </button>
          <button onClick={() => setWeightInput(weightInput.concat(6))}>
            6
          </button>
        </div>
        <div className="buttons">
          <button onClick={() => setWeightInput(weightInput.concat(1))}>
            1
          </button>
          <button onClick={() => setWeightInput(weightInput.concat(2))}>
            2
          </button>
          <button onClick={() => setWeightInput(weightInput.concat(3))}>
            3
          </button>
        </div>
        <div className="buttons">
          <button style={{ color: "orange" }} onClick={resetWeightInput}>
            AC
          </button>
          <button
            style={{ color: "orange" }}
            onClick={() => setWeightInput(weightInput.slice(0, -1))}
          >
            C
          </button>
          <button onClick={() => setWeightInput(weightInput.concat(0))}>
            0
          </button>
          <button onClick={() => setWeightInput(weightInput.concat("."))}>
            .
          </button>
        </div>
      </div>
    </div>
  );
}
