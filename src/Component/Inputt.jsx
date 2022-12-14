import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../todoSlice'

export default function Inputt() {
    const dispatch = useDispatch()
    const [data, setData] = useState('')    

    const changehandler = (e) =>{
            setData(e.target.value)
    }
    const clikhandler = () => {
        dispatch(addTask(data))
    }

    

  return (
    <div className='box'>
        <input className='input' value={data} onChange={changehandler}/>
        <button className='btn' onClick={clikhandler}>Add</button>
    </div>
  )
}
