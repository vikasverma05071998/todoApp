import React, { useEffect, useRef, useState } from 'react'

import { useDispatch } from 'react-redux'
import { deleTask } from '../todoSlice'

export default function Toodo(props) {
  const { task, index } = props
  const dispatch = useDispatch()
  const btnref = useRef() 
  const divref = useRef()
  const [labcheck, setLabcheckl] = useState(false)  
  const [dt, setDt] = useState('')
  const [deadline, setDeadline] = useState(false) 


  useEffect(() => {
    const now = new Date();

    if (dt.valueOf() < now.valueOf()) {
      console.log(dt.valueOf())
      setDeadline(true) 
    } else {
      setDeadline(false)
    }
  }, [dt])   

  const onDelete = () => {
    dispatch(deleTask(index))
  }



  const check = () => {
    if (labcheck === false) {
      btnref.current.style.textDecoration = 'line-through' 
    }
    else {
      btnref.current.style.textDecoration = 'none'
    }
    setLabcheckl(!labcheck)  
  }


  const date = (e) => {
    var date = new Date(e.target.value)
    setDt(date)
  }

  return (
    <div className='divtool'>
    <div ref={divref}> 
      <h2 className='text' ref={btnref}>{task}</h2> 
  
      <textarea id='are'> Description box</textarea>
      <input id='check' type='checkbox' onClick={check} style={{ display: 'block', width: '25px', height: '20px', marginLeft: '80px' }} />
      <button id='delete' onClick={onDelete}>delete</button>
      <input id='date' type='date' onChange={date} />
      {dt ? deadline ? <h4 style={{ color: 'yellow' }}>due date is passed </h4> : <h4 style={{ color: 'white' }}>good to go </h4> : <h4 style={{ color: 'blue' }}>Set deadline</h4>}

    </div>
    </div>
  )
}
