import React from 'react'
import { useParams } from 'react-router-dom'

const Vlog = () => {
  let {facebook,Youtube}=useParams();
  return (
    <div>

  <div className="vlog-area">
  <p>Facebook={facebook}</p>
      <p>Youtube={Youtube}</p>
      <h1>This is Vlog Item</h1>
  </div>
    </div>
  )
}

export default Vlog