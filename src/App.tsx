import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Head } from "./Head";
import { Input } from "./Input";
import { Todo } from "./model";
import TodoList from "./TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          task: todo,
          isDone: false,
        },
      ]);
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <div>
      <Head />
      <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <h1> To Do Task </h1>
      <TodoList todos={todos} setTodos={setTodos} />

      <h1>Done Task</h1>

      <div>
        <ul>
          {todos.map((todo) =>
            todo.isDone ? (
              <>
                <li key={todo.id}>
                  <span>{todo.task}</span>
                </li>
              </>
            ) : null
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
