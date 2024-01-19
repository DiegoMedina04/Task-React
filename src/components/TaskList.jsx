import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'
import TaskCard from './TaskCard'
function TaskList () {
  const { tasks } = useContext(TaskContext)

  if (tasks.length === 0) {
    return (
      <h1 className='text-white text-4xl font-bol text-center'>
        No hay tareas aun
      </h1>
    )
  }
  return (
    <div className='grid grid-cols-4 gap-2'>
      {tasks.map(task => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  )
}

export default TaskList