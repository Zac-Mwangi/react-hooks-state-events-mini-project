import React from "react";

function NewTaskForm({category}) {

  const category_list = category.map((ct) => (
      <option key={ct} value={ct}>{ct}</option>
  ));

  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {category_list}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
