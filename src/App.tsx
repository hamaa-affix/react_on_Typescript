import React, { useState } from "react";
import TodoList from "./componets/TodoList";
import NewTodo from "./componets/NewTodo";
import Todo from "./Todo";

export const App: React.FC = () => {
  const [todos, setTodos] = useState<>([{ id: "", text: "" }]);

  const todoAddHandler = (text: string) => {
    setTodos({ id: Math.random().toString(), text: text });
  };
  return (
    <>
      <NewTodo onAddtodo={todoAddHandler} />
      <TodoList items={todos} />
    </>
  );
};
