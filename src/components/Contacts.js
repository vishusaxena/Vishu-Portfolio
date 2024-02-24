import React from 'react'
import './contact.css'
export default function Contacts() {
  return (
    <div className='container custom-form '>
        <h1 className='text-center'>Let's Connect!</h1>
      <form>
      <div class="form-floating  my-3 ">
  <input type="text" class="form-control" id="floatingInput" placeholder="Fullname"/>
  <label for="floatingInput">Fullname</label>
</div>
  
      <div class="form-floating mb-3 my-3 ">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>

<div class="form-floating my-3">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
  <label for="floatingTextarea2">Message</label>
</div>
  <button type="submit" class="btn btn-primary container">Submit</button>
</form>
    </div>
  )
}
