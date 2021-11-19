import React, { useState, useEffect, useRef } from "react";

export default function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            className="todo-input edit"
            value={input}
            placeholder="Add a Todo"
            name="text"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button edit">Update</button>
        </>
      ) : (
        <>
        <input
          type="text"
          className="todo-input"
          value={input}
          placeholder="Add a Todo"
          name="text"
          onChange={handleChange}
          ref={inputRef}
        />
        <button className="todo-button">Add Todo</button>
      </>
      )}
    </form>
  );
}
