import React from 'react'
import { useSelector } from 'react-redux'
import Toodo from '../Component/Toodo'

export default function Display() {
    const tasks = useSelector((state)=>state.todo.task)
    console.log(tasks)
  return (
    <div>
      <div>
        {
          tasks.map((task, index)=>{
            return  <Toodo  key={index} task={task} index={index}/>
          })
        }
      </div>
      
    </div>
  )
}

