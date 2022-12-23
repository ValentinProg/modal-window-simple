import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <h1>Header</h1>
      <button onClick={props.openModal}>Modal</button>
    </div>
  );
};

export default Header;
