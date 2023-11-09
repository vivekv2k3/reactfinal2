import React, { useState } from "react";
import "./Calculator.css";
function Calculator() {
  let [text, setText] = useState("");

  const handleButtonClick = (buttonText) => {
    setText((prevText) => prevText + buttonText);
  };

  let [output1, setOutput] = useState("");
  const result = () => {
    let calculatedResult;
    try {
      calculatedResult = eval(text);
      setOutput((output1 = calculatedResult));
    } catch (error) {
      setOutput((output1 = "Error"));
    }
    setText((text = calculatedResult));
  };

  const clear = () => {
    setOutput((output1 = ""));
    setText((text = ""));
  };

  return (
    <div className="calc">
      <div>
        <tr className="calctr">
          <td className="calctd1">
            <textarea className="calcinput1" value={text}></textarea>
          </td>
        </tr>
        <tr className="calctr">
          <td className="calctd1">
            <textarea
              className="calcoutput1"
              value={output1}
              readOnly
            ></textarea>
          </td>
        </tr>
      </div>
      <table className="table">
        <tr className="calctr">
          <td className="calctd">
            <button
              className="calcbtn first-row"
              value="7"
              onClick={() => handleButtonClick("7")}
            >
              7
            </button>

            <button
              className="calcbtn first-row"
              value="8"
              onClick={() => handleButtonClick("8")}
            >
              8
            </button>

            <button
              className="calcbtn first-row"
              value="9"
              onClick={() => handleButtonClick("9")}
            >
              9
            </button>

            <button
              className="calcbtn first-row"
              value="/"
              onClick={() => handleButtonClick("/")}
            >
              /
            </button>
          </td>
        </tr>
        <tr className="calctr">
          <td className="calctd">
            <button
              className="calcbtn"
              value="4"
              onClick={() => handleButtonClick("4")}
            >
              4
            </button>

            <button
              className="calcbtn"
              value="5"
              onClick={() => handleButtonClick("5")}
            >
              5
            </button>

            <button
              className="calcbtn"
              value="6"
              onClick={() => handleButtonClick("6")}
            >
              6
            </button>

            <button
              className="calcbtn"
              value="*"
              onClick={() => handleButtonClick("*")}
            >
              *
            </button>
          </td>
        </tr>
        <tr className="calctr">
          <td className="calctd">
            <button
              className="calcbtn"
              value="1"
              onClick={() => handleButtonClick("1")}
            >
              1
            </button>

            <button
              className="calcbtn"
              value="2"
              onClick={() => handleButtonClick("2")}
            >
              2
            </button>

            <button
              className="calcbtn"
              value="3"
              onClick={() => handleButtonClick("3")}
            >
              3
            </button>

            <button
              className="calcbtn"
              value="+"
              onClick={() => handleButtonClick("+")}
            >
              +
            </button>
          </td>
        </tr>
        <tr className="calctr">
          <td className="calctd">
            <button
              className="calcbtn"
              value="0"
              onClick={() => handleButtonClick("0")}
            >
              0
            </button>

            <button
              className="calcbtn"
              value="."
              onClick={() => handleButtonClick(".")}
            >
              .
            </button>

            <button className="calcbtn" value="=" onClick={() => result()}>
              =
            </button>

            <button
              className="calcbtn"
              value="-"
              onClick={() => handleButtonClick("-")}
            >
              -
            </button>
          </td>
        </tr>
        <tr className="calctr">
          <td className="calctd">
            <button className="calcbtn1" value="clr" onClick={() => clear()}>
              CLR
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Calculator;
