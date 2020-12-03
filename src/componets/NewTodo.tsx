import React, { useRef } from "react";

type NewTodoProps = {
  onAddtodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHnadler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddtodo(enteredText);
  };
  return (
    <>
      <form onSubmit={todoSubmitHnadler}>
        <div>
          <label htmlFor="todo-text">todo内容</label>
          <input type="text" id="todo-text" ref={textInputRef} />
          <button type="submit">送信</button>
        </div>
      </form>
    </>
  );
};

export default NewTodo;
