import { createSlice } from '@reduxjs/toolkit';

export const toDoSlice = createSlice({
  name: "todo",
  initialState: {
    value: [],
  },
  reducers: {
    addTodo: (state, action) => {
      // Redux Toolkit에서는 불변성을 신경 쓰지 않고 state를 직접 수정가능.
      state.value.push({ text: action.payload, id: Date.now() });
    },
    deleteTodo: (state, action) => {
      state.value = state.value.filter(toDo => toDo.id !== action.payload);
    },
  },
})

export const { addTodo, deleteTodo } = toDoSlice.actions;

export default toDoSlice.reducer;