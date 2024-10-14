import {createStore} from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

//////////////////////////////////////////////////
//                    REDUX                     //
//////////////////////////////////////////////////

const countModifierReducer= (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    case MINUS:
      return state - 1;
    default : 
      return state;
  }
}

const store = createStore(countModifierReducer);

const onChange = () => {
  number.innerText = store.getState();
}

store.subscribe(onChange);

add.addEventListener("click", () => store.dispatch({type: ADD}));
minus.addEventListener("click", () => store.dispatch({type: MINUS}));


