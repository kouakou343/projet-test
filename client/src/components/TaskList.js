import React, { useContext,useState } from "react";
import { TaskListContext } from "../contexts/TaskListContext";
import Task from "./Task";
import uuid from 'uuid'
import axios from "axios"


const TaskList = () => {
  const { addTask, clearList, editTask, editItem,removeTask } = useContext(TaskListContext)
  const { tasks } = useContext(TaskListContext);
  const [users, setUser] = useState({})

    axios.get("http://localhost:22000/user")
    .then(rest=>{
      console.log("donnees de la table",rest.data)
      setUser(rest.data.users)
      
     })
  return (
    <div>
      {users.length ? (
        <ul className="list">
          {users.map(task => {
            return( 
              <div>
               <Task task={task} key={task.id}/>
               </div>
            )
          })}
        </ul>
      ) : (
        <div className="no-tasks">Aucun utilisateur enregistre</div>
      )}
    </div>
  );
};

export default TaskList;
