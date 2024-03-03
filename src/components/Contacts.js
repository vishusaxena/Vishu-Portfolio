import React from 'react'
import './contact.css'
export default function Contacts(props) {
  return (
    <div className='container custom-form ' style={{ marginTop: "100px" ,marginBottom:"50px" }} id='contact'>
        <h1 className='text-center' style={{backgroundColor:props.mode==="dark" ? 'black':'white' , color:props.mode==="dark" ? 'white':'black' }}>Let's Connect!</h1>
      <form>
      <div class={`  text-dark my-3 `}>
  <input type="text" class="form-control p-2" id="floatingInput" placeholder='Fullname' style={{backgroundColor:props.mode==="dark" ? 'black':'white' , color:props.mode==="dark" ? 'white':'black' }}/>
</div>
  
      <div class="mb-3 my-3 ">
  <input type="email" class="form-control p-2" id="floatingInput" placeholder='Email address' style={{backgroundColor:props.mode==="dark" ? 'black':'white' , color:props.mode==="dark" ? 'white':'black' }}/>
</div>

<div class=" my-3">
  <textarea class="form-control" id="floatingInput"  placeholder='Message' style={{backgroundColor:props.mode==="dark" ? 'black':'white' , color:props.mode==="dark" ? 'white':'black', height: "100px" }}></textarea>
</div>
  <button type="submit" class="btn btn-primary container">Submit</button>
</form>
    </div>
  )
}
