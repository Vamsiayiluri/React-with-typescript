import { useState, useEffect } from "react";

type Todo = {
  task: string;
  completed: boolean;
};

export const TodoExample = () => {
  const getInitialTodos = (): Todo[] => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  };

  const [todos, setTodos] = useState<Todo[]>(getInitialTodos);
  const [task, setTask] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, { task, completed: false }]);
      setTask("");
    }
  };

  const toggleCompletion = (task: string) => {
    setTodos(
      todos.map((todo) =>
        todo.task === task ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (task: string) => {
    setTodos(todos.filter((todo) => todo.task !== task));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTodo}>Add Task</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.task}>
            <div>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
                onClick={() => toggleCompletion(todo.task)}
              >
                {todo.task}
              </span>
              <button onClick={() => removeTodo(todo.task)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
