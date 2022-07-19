import React from "react";

function Task({category,text}) {

  function deleteItem(){
    console.log({text})
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={deleteItem}>X</button>
    </div>
  );
}

export default Task;
