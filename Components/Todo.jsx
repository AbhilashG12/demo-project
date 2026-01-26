import { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [val, setVal] = useState("");
  const [todo, setTodo] = useState([]);

  const addtodo = () => {
    if (val.trim() !== "") {
      setTodo([...todo, { text: val, id: Date.now() }]);
      setVal("");
    }
  };

  const del = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div className="inp">
        <h2>Todo-List Website</h2>
        <input
          type="text"
          placeholder="Add new Todo.."
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button onClick={addtodo}>Add</button>
      </div>
      <div className="list">
        <ul>
          {todo.map((item) => (
            <li key={item.id} className="todo-item">
              <span>{item.text}</span>
              <button onClick={() => del(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
