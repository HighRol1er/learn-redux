import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
  const filteredTodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm;

    return todos.filter((todo) => {
      const matchsFilter = (filter === "COMPLETED" && todo.completed) || 
        (filter === "INCOMPLETE" && !todo.completed) || (filter === "ALL");
      const matchsSearch = todo.text.toLowerCase().includes(searchTerm);

      return matchsFilter && matchsSearch;
    });
  })

  // console.log(filteredTodos);
  return (
    <ul>
      <li className="my-2 text-sm italic">All Your Todo Here...</li>
      {
        filteredTodos.map((todo, index) => (
          <TodoItem key={index} todo={todo} index={index}/>
        ))
      }
    </ul>
  )
}

export default TodoList;