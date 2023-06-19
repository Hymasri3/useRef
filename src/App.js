import React, { useState, useRef, useEffect } from "react";
import "./App.css";

//DOM REFERENCE
//use ref is used to store prev state
//hold mutable value prevent re-render of component

//we can hold the value between the component re-renders if you use useState the component rendered so we can use useRef we can't use useState

function App() {
  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);

  const inputEl = useRef("");
  const previousValue = useRef("");
  console.log(inputEl);

  const reset = () => {
    setName("");
    inputEl.current.focus(); //dom
    console.log(inputEl.current.value);
  };

  useEffect(() => {
    previousValue.current = counter;
  }, [counter]);
  return (
    <div>
      <div>
        <input
          ref={inputEl}
          autoComplete="off"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={reset}>Reset</button>
      </div>

      <div>My name is {name}</div>
      <h1>Random Counter: {counter}</h1>
      {typeof previousValue.current !== "undefined" && (
        <h1>Previous Number:{previousValue.current}</h1>
      )}

      <button onClick={() => setCounter(Math.ceil(Math.random() * 100))}>
        Generate Random Number
      </button>
    </div>
  );
}

export default App;
