import React, { useState } from "react";
import "./addItemForm.css";
import SelectBar from "../selectBar/SelectBar";
import { StageState } from "../../context/StageContext";

const allUsers = ["user1", "user2", "user3", "user4"];
function AddItemForm() {
  const [users, setUsers] = useState([]);
  const [item, setItem] = useState("");
  const [attachment, setAttachment] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isUserClick, setIsUserClick] = useState(false);
  const [error, setError] = useState({item:false,
                                description:false,
                                user:false,
                                status:false,
                                startDate:false,
                                endDate:false,});

  const {
    todos,
    inProgress,
    readyToTest,
    done,
    setTodos,
    handleAddItem,
    setInProgress,
    setReadyToTest,
    setDone,
  } = StageState();

  const handleSearch = () => {
    return allUsers.filter((item) => {
      if (item.toLowerCase().includes(searchQuery.toLowerCase())) {
        return item;
      }
    });
  };

  const handleStatus = (val)=>{
    setStatus(val);
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    if (item === "") {
      setError({...error,
      item:true});
      return;
    }else if(description === ""){
      setError({...error,
          description:true});
      return;
    }else if(users.length === 0){
      setError({...error,
          user:true});
      return;
    }else if(status === ""){
      setError({...error,
          status:true});
      return;
    }else if(startDate === ""){
      setError({...error,
          startDate:true});
      return;
    }else if(endDate === ""){
      setError({...error,
          endDate:true});
      return;
    }

    let task = {
      item,
      attachment,
      description,
      users,
      status,
      startDate,
      endDate,
    };
    
    if(task.status === "To do"){
      if (todos.length == 0) {
        setTodos([task])
      }else{
        setTodos([...todos,task]);
      }
    }else if(task.status === "In progress"){
      if (!inProgress) {
        setInProgress([task])
      }else{
        setInProgress([...inProgress,task]);
      }
    }else if(task.status === "Ready to Test"){
      if(!readyToTest){
        setReadyToTest([task]);
      }else{
        setReadyToTest([...readyToTest,task]);
      }
    }else if(task.status === "done"){
      if(!done){
        setDone([task]);
      }else{
        setDone([...done,task]);
      }
    }
    handleAddItem();
    setError({item:false,
      description:false,
      user:false,
      status:false,
      startDate:false,
      endDate:false,})
      console.log(todos);
  }

  return (
    <div className="add_item_div">
      <div className="add_item_card position-absolute">
        <div
          className="d-flex flex-row-reverse"
          style={{ cursor: "pointer" }}
          onClick={() => {
            handleAddItem();
          }}
        >
          X
        </div>
        <form>
          <div className="input_div">
            <label>Item Name</label>
            {error.item ? <span className="error">this field is requered</span> : null }
            <input type="text" value={item} onChange={(event)=>{setItem(event.target.value)}}/>
          </div>
          <div className="input_div">
            <label>Attachment</label>
            <input type="file" value={attachment} onChange={(event)=>{
              setAttachment(event.target.value)}}/>
          </div>
          <div className="input_div">
            <label>Description</label>
            {error.description ? <span className="error">this field is requered</span> : null }
            <input type="text" value={description} onChange={(event)=>{setDescription(event.target.value)}}/>
          </div>
          <div
            className="input_div w-100 d-inline-flex flex-column"
            onFocus={(e) => {
              e.preventDefault();
              setIsUserClick(true);
            }}
          >
            <div className="d-inline-flex flex-row">
              {users.map((item) => {
                return <div className="user_tag">{item}</div>;
              })}
            </div>
            <div className="d-flex flex-column float-right">
              <label>Users</label>
            {error.user ? <span className="error">this field is requered</span> : null }
              <input
                type="text"
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                }}
              />
            </div>
            {isUserClick ? (
              <div style={{border:"1px solid black"}}>
                {handleSearch().map((item) => {
                  return (
                    <div
                      onClick={() => {
                        setUsers([...users, item]);
                        setIsUserClick(false);
                      }}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
          <div className="input_div">
            <span>Status</span>
            {error.status ? <span className="error">this field is requered</span> : null }
            <SelectBar status={status} handleStatus={handleStatus}/>
          </div>
          <div className="input_div">
            <label>Start Date</label>
            {error.startDate ? <span className="error">this field is requered</span> : null }
            <input type="date" value={startDate} onChange={(event)=>{setStartDate(event.target.value)}}/>
          </div>
          <div className="input_div">
            <label>End Date</label>
            {error.endDate ? <span className="error">this field is requered</span> : null }
            <input type="date" value={endDate} onChange={(event)=>{setEndDate(event.target.value)}}/>
          </div>
          <div>
            <button className="create_button" type="submit"
            onClick={(event)=>{
              handleSubmit(event);
            }}>Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddItemForm;
