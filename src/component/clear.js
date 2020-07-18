import React from "react";
import "./style.css";

export const Clear = props => (
  <div onClick={() => props.handleClear()} className={`clear`}>
    {props.children}
  </div>
);
