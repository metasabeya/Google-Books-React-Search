import React from "react";
import "./style.css";

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" type="text" {...props} />
    </div>
  );
}
export function FormBtn({ children, onClick }) {
  return (
    <button onClick={onClick} style={{ float: "center", marginBottom: 10 }} id="btn" className={"btn"}>
      {children}
    </button>
  );
}
