import React from 'react'
import { useState } from 'react'
// import ToDolist from './ToDolist';
import './TodoApp.css'


const TodoApp = () =>  {


  // const [list,setList] = useState('')
  // const [Item,setItem] = useState([]);
  // const AddToList =(event)=>{
    
  //   setList(event.target.value);
  // };

  // const RemoveItem = () =>{
  //   setItem((oldItem) => {
  //       return[...oldItem, list];
  //   });
  //   setList('');
  // };
  // const deleteItems = (id)=> {

  //  setItem ((oldItem) => {
  //   return oldItem.filter((arrElem, index) => {
  //     return index !== id;
  //   })
  //  })
  // }
  // return (
  // //   <div className='Todo-area'>
  // //  <h1>Todo List</h1>
  // //       <input type='text' onChange={AddToList} placeholder='Item' value={list} />
  // //       <button onClick={RemoveItem}>Add</button>
  // //       <ul>
  // //           {Item.map((itemval, index) => {
  // //             return <ToDolist key={index}
  // //              id={index}
  // //               text={itemval}
  // //               onSelect ={deleteItems}
  // //               />;
  // //           })}
  // //       </ul>
  // //   </div>
  // )
}

export default TodoApp