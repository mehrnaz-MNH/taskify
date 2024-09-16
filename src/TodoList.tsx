import React, { useState } from "react";
import { Todo } from "./model";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  const [task, setTask] = useState<string>("");

  const handleDone = (id: number) => {
    const updatedList: Todo[] = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: true } : todo
    );

    setTodos(updatedList);
  };

  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  };

  const handleEdit = (id: number, TextValue: string) => {
    const updatedList: Todo[] = todos.map((todo) =>
      todo.id === id ? { ...todo, task: TextValue } : todo
    );

    setTodos(updatedList);
  };

  return (
    <div>
      <ul>
        {todos.map((todo) =>
          !todo.isDone ? (
            <>
              <li key={todo.id}>
                <span> {todo.task} </span>

                <button>edit</button>
                <button onClick={() => handleDelete(todo.id)}>delete</button>
                <button onClick={() => handleDone(todo.id)}>check done</button>
              </li>
            </>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default TodoList;
