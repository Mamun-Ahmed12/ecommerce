import React from 'react'

function ToDolist(props) {
   
  return (
    <div className='list'>
         <li>{props.text}
                
                <button className='listbtn' onClick={() => {
                    props.onSelect(props.id);
                }}>Remove</button>
                </li>
    </div>
  )
}

export default ToDolist