import React, { useState, useContext, useEffect } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'
import uuid from 'uuid';
import axios from "axios"
const TaskForm = (props) => {
  const { addTask, clearList, editTask, editItem } = useContext(TaskListContext)
  
  const modal=
  { 
    nom:"",
    prenoms:"",
    job:""
  }
  //state du champ user
  const [title, setTitle] = useState(modal)

  const handleSubmit = e => {
    e.preventDefault()
    //ajouter un user
    console.log("sumit",title)
    //AXIOS
    axios.post("http://localhost:22000/user",title)
    .then(rest=>{
      console.log("donnees de la table",rest)
    })
  }


    /* if (!editItem) {
      addTask(title)
      setTitle({...modal})
    } else {
      editTask({...modal}, editItem.uuid())
    }
  } */

  const handleChange = e => {
    e.preventDefault()
    console.log("handle",e.target.value)
    setTitle({...title,
              [e.target.id]:e.target.value
    })
  }

 

//destructuring des variables
const {nom,prenoms,job}=title;
console.log(title.nom)

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Nom"
        value={nom}
        onChange={handleChange}
        required
        id="nom"
        className="task-input"
      />
     
            <input
        type="text"
        placeholder="prenom"
        value={prenoms}
        onChange={handleChange}
        required
        id="prenoms"
        className="task-input"
      />
       <input
        type="text"
        placeholder="job"
        value={job}
        onChange={handleChange}
        required
        id="job"
        className="task-input"
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItem ? 'Edit Tas' : 'Ajouter'}
        </button>
       
      </div>
    </form>
  )
}

export default TaskForm
