import {createStore} from "redux";

// action name
const ADD = "ADD";
const DELETE = "DELETE";

// action creator
const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

// reducer
const reudcer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{text: action.text, id: Date.now()}, ...state];
    case DELETE: 
      return state.filter(toDo => toDo.id !== action.id);
    default:
      return state;
  }
};

// store
const store = createStore(reudcer);

export const actionCreators = {
  addToDo,
  deleteToDo
}

export default store;