import React, { useState, useEffect } from "react";
import "bulma/css/bulma.css";
import InputToDo from "./InputToDo";
import Filter from "./Filter";
import ToDo from "./ToDo";
import { collection } from "firebase/firestore";
import { getFirestore, addDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";

var db = getFirestore();

export const ToDoApp = () => {
  const getKey = () => Math.random().toString(32).substring(2);

  const [todos, setToDos] = useState([]);
  const [filter, setFilter] = useState("ALL");

  useEffect(() => {
    const todosCollectionRef = collection(db, "todos");
    getDocs(todosCollectionRef).then((querySnapshot) => {
      setToDos(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  const handleAdd = (text) => {
    setToDos([...todos, { key: getKey(), text, done: false }]);
  };

  const handleFilterChange = (value) => setFilter(value);

  const displayToDos = todos.filter((todo) => {
    if (filter === "ALL") return true;
    if (filter === "ToDo") return !todo.done;
    if (filter === "Done") return todo.done;
  });
  const handleCheck = (checked) => {
    const newToDos = todos.map((todo) => {
      if (todo.id === checked.key) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setToDos(newToDos);
  };

  return (
    <div className="panel is-warning">
      <div className="panel-heading">ToDoApp</div>
      <InputToDo onAdd={handleAdd} />
      <Filter onChange={handleFilterChange} value={filter} />
      {displayToDos.map((todo) => (
        <ToDo key={todo.id} todo={todo.todo} onCheck={handleCheck} />
      ))}
      <div className="panel-block">{displayToDos.length}タスク</div>
    </div>
  );
};

export default ToDoApp;
