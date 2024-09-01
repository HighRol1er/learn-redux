import Counter from "./component/Counter";

// Store : made of multiple of slices

// Actions : what it should do to the state
const increment = { type : "INCREMENT" }; // [pseudo code]
// const incrementByAmount = { type : "INCREMENT", payload : 10 };
const decrement = { type : "DECREMENT" }; // [pseudo code]

//Reducers

function App() {
  return (
    <div>
      <h1>Redux Counter Tutorial</h1>
      <Counter />
    </div>
  );
}

export default App;
