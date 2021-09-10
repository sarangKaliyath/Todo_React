import { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoList from "./TodoList";
import "../App.css";

function TodItems() {
  const [text, setText] = useState("");

  const [todoList, setTodoList] = useState([]);

  function getData(el) {
    setText(el.target.value);
  }

  const handleClick = () => {
    const payload = { status: false, title: text, id: uuid() };
    setTodoList([...todoList, payload]);
  };

  return (
    <>
      <div className="inputBox">
        <input
          value={text}
          type="text"
          placeholder="Enter Tasks"
          onChange={getData}
        ></input>
        <button onClick={handleClick}>Add</button>
      </div>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}

export default TodItems;
