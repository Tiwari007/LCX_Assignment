import { useState } from "react";
import "./App.css";

const CounterComponent = ({ id, counter, onClickPlus, onClickMinus }) => {
  const timestamp = Date.now();

  return (
    <>
      <div className="counter">
        <button onClick={onClickMinus}>-</button>
        <div className="counterText">
          <span> Counter {id} </span>
          <span className="count">{counter}</span>
        </div>
        <button onClick={onClickPlus}>+</button>
      </div>
      <div className="rerenderCount">Re-render : {timestamp}</div>
      <hr />
    </>
  );
};

export default function App() {
  const [c1, setC1] = useState(0);
  const [c2, setC2] = useState(0);

  const updateCounter = (val, fn, subtractFl) => {
    const newVal = val + (subtractFl ? -1 : 1);
    fn?.(newVal);
  };

  return (
    <div className="App">
      <CounterComponent
        id={1}
        counter={c1}
        onClickPlus={() => updateCounter(c1, setC1)}
        onClickMinus={() => updateCounter(c1, setC1, true)}
      />

      <CounterComponent
        id={2}
        counter={c2}
        onClickPlus={() => updateCounter(c2, setC2)}
        onClickMinus={() => updateCounter(c2, setC2, true)}
      />
    </div>
  );
}
