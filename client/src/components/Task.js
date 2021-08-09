import React, { useContext } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'
import axios from "axios"
const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext)

 

  
  return (
    <li className="list-item">
      <span>{task.nom} </span>
      <span>{task.prenoms} </span>
      <span>{task.job} </span>
      <div>
        <button
          className="btn-delete task-btn"
          onClick={() => removeTask( axios.delete(`http://localhost:22000/user/${task.id}`))}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </li>
  )
}

export default Task
