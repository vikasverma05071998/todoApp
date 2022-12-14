import React from 'react'

import Inputt from './Component/Inputt'
import Display from './Component/Display'


export default function App() {
  return (
    <>
    <div className='header'>
       <h1 id='head'>TO DO APP FOR DAILY TASK</h1> 
        <Inputt/>
        <Display/> 
    </div>
    </>
    
  )
}
