import React, { useState } from "react";
import { StageState } from "../../context/StageContext";
import "./selectStyle.css";

const statusArray = ["To do", "In progress", "Ready to Test", "done"];

function SelectBar({status, handleStatus}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSelected, setIsSelected] = useState(false);

  const handleSearch = () => {
    return statusArray.filter((item) => {
      if (item.toLowerCase().includes(searchQuery.toLowerCase())) {
        return item;
      }
    });
  };
  return (
    <div className="select_bar">
      <div
        className="select_input"
        onClick={() => {
            setSearchQuery("");
          setIsSelected(!isSelected);
        }}
      >
        <span>{status ? status : "select"}</span>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
          <path d="m12 15.375-6-6 1.4-1.4 4.6 4.6 4.6-4.6 1.4 1.4Z" />
        </svg>
      </div>
      {isSelected ? (
        <div className="select_options">
          <input
            id="search_input"
            type="text"
            onChange={(event) => {
              setSearchQuery(event.target.value);
            }}
          />
          <div>
            {handleSearch().map((item) => {
              return <div style={{cursor:"pointer"}}
              onClick={()=>{
                handleStatus(item);
                setSearchQuery("");
                setIsSelected(false);
              }}>{item}</div>;
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default SelectBar;
