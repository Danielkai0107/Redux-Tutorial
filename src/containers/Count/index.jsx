import React from 'react';
import { useRef } from 'react';
//連接UI和redux
import { connect } from 'react-redux';
import {
  increment,
  decrement,
  incrementAsync,
} from '../../redux/actions/count';

//UI組件
const Count = ({ count, increment, decrement, incrementAsync, personObj }) => {
  const num = useRef(undefined);

  const handleIncrement = () => {
    const value = parseInt(num.current.value);
    increment(value);
  };
  const handleDecrement = () => {
    const value = parseInt(num.current.value);
    decrement(value);
  };

  const handleIncrementIfOdd = () => {
    const value = parseInt(num.current.value);
    count % 2 !== 0 && increment(value);
  };
  const handleIncrementAsync = () => {
    const value = parseInt(num.current.value);
    incrementAsync(value, 1000);
  };

  return (
    <div>
      <h1>Count Component</h1>
      <p>person component current people : {personObj.length} </p>
      <p>Number SUM : {count}</p>
      <select ref={num}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
      &nbsp;
      <button onClick={handleIncrement}>+</button>
      &nbsp;
      <button onClick={handleDecrement}>-</button>
      &nbsp;
      <button onClick={handleIncrementIfOdd}>IncrementIfOdd</button>
      &nbsp;
      <button onClick={handleIncrementAsync}>IncrementAsync</button>
    </div>
  );
};

//容器組件
export default connect(
  (state) => ({
    count: state.count,
    personObj: state.person,
  }),
  {
    increment,
    decrement,
    incrementAsync,
  },
)(Count);
