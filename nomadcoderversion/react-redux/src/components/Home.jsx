import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from '../features/todo/todoSlice'


const Home = () => {
  const [text, setText] = useState("");

  const toDos = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();

  const onChangeText = (e) => {
    setText(e.target.value);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text)); // 상태 업데이트는 여기서만 이루어지게 함
      setText(""); // 상태를 클리어하는 부분도 이벤트 종료 후에만 호출
    }
  }
  const handleDelete = (id) => {
    dispatch(deleteTodo(id)); // deleteTodo에 id를 전달
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={handleOnSubmit}>
        <input 
          type='text' 
          value={text} 
          onChange={onChangeText}/>
        <button type="submit">Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>
            {toDo.text}
            <button onClick={() => handleDelete(toDo.id)}>DEL</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home