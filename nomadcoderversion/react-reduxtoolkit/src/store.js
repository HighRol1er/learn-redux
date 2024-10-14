import {createStore} from "redux";
import {createAction} from "@reduxjs/toolkit";

const addTodo = createAction("ADD");
const deleteTodo = createAction("DELETE");

console.log(addTodo, deleteTodo);

const reducer = () => {}

const store = createStore(reducer);

export default store;


