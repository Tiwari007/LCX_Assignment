import { useState, memo, useCallback } from "react";
import "./App.css";

const CounterComponent = memo(({ id, counter, onClickPlus, onClickMinus }) => {
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
});

export default function App() {
  const [c1, setC1] = useState(0);
  const [c2, setC2] = useState(0);

  const updateCounter = useCallback((val, fn, subtractFl) => {
    const newVal = val + (subtractFl ? -1 : 1);
    fn?.(newVal);
  }, []);

  return (
    <div className="App">
      <CounterComponent
        id={1}
        counter={c1}
        onClickPlus={useCallback(() => updateCounter(c1, setC1), [c1])}
        onClickMinus={useCallback(() => updateCounter(c1, setC1, true), [c1])}
      />

      <CounterComponent
        id={2}
        counter={c2}
        onClickPlus={useCallback(() => updateCounter(c2, setC2), [c2])}
        onClickMinus={useCallback(() => updateCounter(c2, setC2, true), [c2])}
      />
    </div>
  );
}
