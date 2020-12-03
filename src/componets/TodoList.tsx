import React, { useState } from "react";

interface TodoListProps {
  items: { id: string; text: string };
}

const TodoList: React.FC<TodoListProps> = (props) => {
  //const [todoItem, setTodoItem] = useState([{ id: "", text: "" }]);
  return (
    <>
      <ul>
        {props.items.map((todo) => {
          return (
            <>
              <li key={todo.id}>内容:{todo.text} </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
