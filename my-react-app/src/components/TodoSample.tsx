import { useState } from "react";

export const TodoSample = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const addTodo = () => setTodos([...todos, `Todo ${todos.length + 1}`]);
  const clearTodos = () => setTodos([]);

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={clearTodos}>Clear Todos</button>
    </div>
  );
};
