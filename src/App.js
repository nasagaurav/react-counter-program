import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [x, setx] = useState(0);
  console.log(useState(0));
  const p1 = () => {
    setx(x + 1);
  };
  const p2 = () => {
    setx(x - 1);
  };
  const p3 = () => {
    setx(0);
  };
  return (
    <div>
      <h1>counter : {x}</h1>
      <button onClick={p1}>+</button>
      <button onClick={p2}>-</button>
      <button onClick={p3}>0</button>
    </div>
  );
}
