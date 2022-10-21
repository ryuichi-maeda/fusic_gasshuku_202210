import React, { useState } from "react";
import "bulma/css/bulma.css";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

var db = getFirestore();

export const InputToDo = (props) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      if (!text.match(/\S/g)) {
        return;
      }
      props.onAdd(text);
      const docRef = addDoc(collection(db, "todos"), {
        todo: text,
      });
      setText("");
    }
  };

  return (
    <div>
      <input
        class="input"
        type="text"
        placeholder="Enter to add"
        value={text}
        onChange={handleChange}
        onKeyPress={handleEnter}
      />
    </div>
  );
};

export default InputToDo;
