import React from "react";
import Task from "./Task";

function TaskList({tasks}) {
  // console.log(tasks);

  const tasksList = tasks.map((ts) => (
    <Task key = {ts.text} category = {ts.category} text = {ts.text}/>
  ));

  return (
    <div className="tasks">
      {tasksList}
    </div>
  );
}

export default TaskList;
