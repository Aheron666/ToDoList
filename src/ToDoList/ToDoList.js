import React, { useState } from "react";
import "./ToDoList.css";

function ToDoLost() {
  const [outPut, setOutPut] = useState([]);
  let textInput = React.createRef();
  let textInputValue;

  let addTastBlock = () => {
    textInputValue = textInput.current.value;
    setOutPut([...outPut, textInputValue]);
    console.log(outPut);
    textInput.current.value = "";
  };

  let checkbox = (props) => {
    if (props.target.checked)
      props.target.nextSibling.style.textDecoration = "line-through";
    else props.target.nextSibling.style.textDecoration = "none";
  };

  let removeBlock = (props) => {
    let btnParrent = props.target.parentNode;
    btnParrent.parentNode.style.display = 'none'
    console.log(btnParrent.parentNode);
  };

  return (
    <div className="container">
      <div className="tasks_tittle">Tasks</div>
      <div className="tasks_add_field">
        <input type="text" className="task_input_field" ref={textInput} />
        <input type="submit" id="add_btn" value="Add" onClick={addTastBlock} />
      </div>
      <div className="added_tasks">
        {outPut.map((item, index) => (
          <div key={index} className="new_task">
            <div className="task_checkbox">
              <label className="new_task_name">
                <input
                  type="checkbox"
                  className="checkbox"
                  onClick={checkbox}
                />
                <div className="new_task_name_text">{item}</div>
              </label>
            </div>
            <div className="remove_btn_container">
              <input
                type="submit"
                className="remove_btn"
                value="Remove"
                onClick={removeBlock}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToDoLost;
