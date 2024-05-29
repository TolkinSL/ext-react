import React, { useState } from 'react';
// import './Counter.scss';
import classes from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className={classes.btn}>
      <button onClick={increment}>Increase +1</button>
      <p>Counter {count}</p>
    </div>
  );
};
