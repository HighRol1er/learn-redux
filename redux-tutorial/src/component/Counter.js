import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../state/counter/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value) //hook
  const dispatch = useDispatch();
  
  return (
    <div>
      {count}
      <div>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </div>
  )
}

export default Counter;