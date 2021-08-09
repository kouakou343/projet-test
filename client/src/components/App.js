import React from "react";
import TaskListContextProvider from "../contexts/TaskListContext";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

import "../App.css";
import Header from "./Header";

const App = () => {
  return (
    <TaskListContextProvider>
            <TaskForm />
            <TaskList />
    </TaskListContextProvider>
  );
};

export default App;
