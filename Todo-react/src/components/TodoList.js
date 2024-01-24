import React from "react";

export const TodoList = (props) => {
  return (
    <div className="style_div">
      <i
        className="fa fa-times"
        aria-hidden="true"
        onClick={() => {
          props.onSelect(props.id);
        }}
      />
      {/* <i classname="fa-light fa-circle-xmark" ></i> */}
      <li>{props.text}</li>
    </div>
  );
};
