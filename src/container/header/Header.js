import React from "react";
import { StageState } from "../../context/StageContext";
import "./header.css";

function Header() {
  const {handleAddItem} = StageState();
  return (
    <div className="header">
      <div className="container">
        <h3>Task Manager</h3>
        <button
          onClick={() => {
            handleAddItem();
          }}
        >
          Add Item
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
            <path d="M11.25 18.75v-6h-6v-1.5h6v-6h1.5v6h6v1.5h-6v6Z" fill="#fff" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Header;
