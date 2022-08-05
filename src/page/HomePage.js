import React from 'react'
import './homeStyle.css';
import CollapsibleDiv from '../container/collapsibleDiv/CollapsibleDiv'
import { StageState } from '../context/StageContext';

function HomePage() {
  const {todos,
    inProgress,
    readyToTest,
    done} = StageState();
  return (
    <div className='home_main'>
        <CollapsibleDiv tasks={todos} category={"Todo"}/>
        <CollapsibleDiv tasks={inProgress} category={"InProgress"}/>
        <CollapsibleDiv tasks={readyToTest} category={"ReadyToTest"}/>
        <CollapsibleDiv tasks={done} category={"Done"}/>  
    </div>
  )
}

export default HomePage