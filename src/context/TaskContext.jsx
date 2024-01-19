import React, { createContext, useEffect, useState } from 'react'
import { tasks as data } from '../data/Tasks'

export const TaskContext = createContext()

export function TaskContextProvider (props) {
  const [tasks, setTasks] = useState([])
  useEffect(() => setTasks(data), [])

  function createTask (task) {
    const newTitle = {
      title: task.title,
      id: tasks.length,
      description: task.description
    }
    setTasks([...tasks, newTitle])
  }

  function deleteTask (id) {
    setTasks(tasks.filter(task => id !== task.id))
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}
