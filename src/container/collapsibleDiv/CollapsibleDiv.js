import React, { useState } from "react";
import "./collapseStyle.css";

function CollapsibleDiv({ tasks, category }) {
  const [isCollapse, setIsCollapse] = useState(false);

  const captionStyle = {
    display: "flex",
    flexDirection: `${isCollapse ? "row" : "column-reverse"}`,
    height: `${!isCollapse ? "20vh" : "auto"}`,
    justifyContent: "space-between",
  };

  const spanStyle = {
    transform: `${!isCollapse ? "rotate(-90deg)" : "rotate(0deg)"}`,
  };

  let style = {
    minWidth: `${isCollapse ? "300px" : "50px"}`,
    maxWidth: `${isCollapse ? "300px" : "50px"}`,
  };
  return (
    <div className="d-flex flex-column collapse_div" style={style}>
      <div style={captionStyle}>
        <span style={spanStyle}>{category}</span>
        <div
          onClick={() => {
            setIsCollapse(!isCollapse);
          }}
        >
          {!isCollapse ? (
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="m6.525 17.65-1.05-1.05L10.05 12 5.475 7.4l1.05-1.05 5.65 5.65Zm6.35 0-1.05-1.05L16.4 12l-4.575-4.6 1.05-1.05 5.65 5.65Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="M11.125 17.65 5.475 12l5.65-5.65 1.05 1.05L7.6 12l4.575 4.6Zm6.35 0L11.825 12l5.65-5.65 1.05 1.05L13.95 12l4.575 4.6Z" />
            </svg>
          )}
        </div>
      </div>
      <div className="p-4">
        {tasks !== undefined && isCollapse
          ? tasks.map((item) => {
              return (
                <div className="task_card">
                  <h6>{item.item}</h6>
                  <span>{item.description}</span>
                  <div>{item.users.map((user)=>{
                    return <span>{user} </span>
                  })}</div>
                  <div className="d-flex justify-content-between">
                    <span>{item.startDate}</span>
                    <span>-</span>
                    <span>{item.endDate}</span>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default CollapsibleDiv;
