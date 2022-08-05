import React, { createContext, useContext, useState } from "react";

const Stage = createContext();
function StageContext({ children }) {
  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [readyToTest, setReadyToTest] = useState([]);
  const [done, setDone] = useState([]);
  const [hasAddItemClick, setHasAddItemClick] = useState(false);

  const handleAddItem = ()=>{
    setHasAddItemClick(!hasAddItemClick);
  }
  return (
    <Stage.Provider
      value={{
        todos,
        inProgress,
        readyToTest,
        done,
        setTodos,
        setInProgress,
        setReadyToTest,
        setDone,
        handleAddItem,
        hasAddItemClick,
      }}
    >
      {children}
    </Stage.Provider>
  );
}
export const StageState = ()=> { 
    return useContext(Stage)}
export default StageContext;
