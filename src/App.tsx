import { useState } from "react"
import { UserCard } from "./components/UserCard"

export default function App(){
  const [count, setCount] = useState(0);

  const userInfo = {id: 1}


  const handleDelete =() => {
    // Some function to just trigger a render in the child component
  }

  return (
    <div>
      <button onClick={() => {
        console.log(count)
        return setCount(c => c + 1)
      }}>
        Click Me
        </button>
      {/* <UserCard name="Alex" />        */}
      {/* <UserCard info={userInfo} name="Alexander"/>  */}
      <UserCard handleDelete={handleDelete} name="Alexus" info={userInfo}></UserCard>
    </div>
  )
}



















// import {useState} from 'react';
// import { TaskItem } from './components/TaskItem';
// import type { Task } from './types/types';

// const mockTasks: Task[] = Array.from({length: 30}, (_, i) => ({
//   id: i,
//   title: `Task ${i + 1}`,
//   completed: false,
// }))

// export default function App(){
//   const [tasks, setTasks] = useState<Task[]>(mockTasks);
//   const [count, setCount] = useState(0);

//   const toggleTask = (id: number) => {
//     setTasks((prev:Task[] )=> prev.map(task => 
//       task.id === id ? {...task, completed: !task.completed} : task
//     ))
//   }

  

//   return (
//     <div
//     className='min-h-screen bg-gray-50 p-10'
//     >
//       <div
//       className='max-w-2xl mx-auto'
//       >
//         <header
//         className='mb-8 text-center'
//         >
//           <h1
//           className='font-black text-4xl text-gray-900 mb-2'
//           >Task manager</h1>
//           <p className='text-gray-500'>Unoptimized Version</p>
//         </header>

//         <div
//         className='bg-white p-6 rounded-xl shadow-md mb-8 flex items-center justify-between'
//         >
//           <div>
//             <p className='text-sm text-gray-400'>Clicking this button triggers a re-render of the whole app</p>
//           </div>

//           <button
//           onClick={() => setCount(prev => prev + 1)}
//           className='bg-red-600 px-6 py-3 text-white rounded-lg font-bold hover:bg-red-600 transition-all active:scale-95'
//           >
//             Count: {count}
//           </button>
//         </div>


//         <div>
//           {tasks.map(task => (
//             <TaskItem key={task.id} task={task} onToggle={toggleTask}/>
//           ))}
//         </div>


//       </div>
//     </div>
//   )
// }
