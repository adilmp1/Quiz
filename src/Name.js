import React from 'react'
import './Name.css'
export const Name = (props) => {
    const {name,setName,setVal} = props;
  return (
    <div className='name'>
        <input onChange={(event)=>{
            setName(event.target.value)
        }} type='text' value={name} placeholder='Enter your name'></input>
        <input onClick={()=>{
            if(name)
            {
                setVal(1)
            }
            else
            {
                alert("Please Enter your name to enter the quiz")
            }
        }} type='submit'></input>
    </div>
  )
}
