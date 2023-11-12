import React from 'react'
function Contact() {
  return (
    <div className='contact'>

        <div className="form-area">
        <div className="container">
          <div className="col-md-12">
        <h1>This is Contact Page</h1>

          <form action="" className='p-form'>
          <input type="text" placeholder='Name' />
          <input type="email" placeholder='Email'/>
          <textarea name="" id="" cols="30" rows="10" placeholder='Massege'></textarea>
          <input type="button" value="Submit" />
        </form>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Contact