// import { memo } from 'react'
import type { TaskItemProps} from '../types/types'

export const TaskItem =({task, onToggle}: TaskItemProps) => {
    for(let i=0; i<50_000_000; i++){
        // Burning my CPU 🙆‍♂️
    }

    console.log(`Rendering TaskItem: ${task.title}`)

    return(
        <div
        className='flex-items-center justify-between p-4 mb-2 bg-white rounded-lg shadow-sm border border-gray-400'
        >
            <span
            className={task.completed ? "line-through text-gray-400" : "text-gray-700"}
            >
                {task.title}
            </span>
            <button
            onClick={() => onToggle(task.id)}
            className='px-3 py-1 bg-indigo-100 text-indigo-600 rounded-md hover:bg-indigo-200 transition-colors'
            >
                {task.completed ? "Undo" : "Complete"}
            </button>
        </div>
    )
}
