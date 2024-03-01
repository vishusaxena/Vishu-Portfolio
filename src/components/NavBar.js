import React from 'react'


import './Navbar.css';
function NavBar(props) {
  
  return (
    <div>
      <nav className={` navbar navbar-expand-lg  fixed-top bg-${props.mode} shadow p-3 mb-5  ` }   >
  <div className="container-fluid">
    <a  className="navbar-brand mx-3 fw-bold" href="\" style={{color:props.mode==="dark" ? 'white':'black' }}>Vishu Saxena</a >
    <button  className="navbar-toggler" type="a" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button >
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto  ">
        <li className="nav-item mx-3  ">
          <button  className="nav-link  btn" aria-current="page" href="\" onClick={() => props.click('about')} style={{color:props.mode==="dark" ? 'white':'black' }}>About </button >
        </li>
        <li className="nav-item mx-3 ">
          <button  className="nav-link btn " href="\" onClick={() => props.click('skill')} style={{color:props.mode==="dark" ? 'white':'black' }}>Skills</button >
        </li>
        <li className="nav-item mx-3 ">
          <button  className="nav-link btn " href="\" onClick={() => props.click('project')} style={{color:props.mode==="dark" ? 'white':'black' }}>Projects</button >
        </li>
        <li className="nav-item mx-3 ">
          <button  className="nav-link btn " href="\"onClick={() => props.click('contact')} style={{color:props.mode==="dark" ? 'white':'black' }}>Contact Me</button >
        </li>
        <li className="nav-item mx-3">
        <button  type="a" className="btn btn-primary" >Download CV</button >


        </li>
        <button style={{width:"40px",height:"40px",border:"none",borderRadius:"50% "}} onClick={props.toggle}><i class="fa-solid fa-moon"></i></button>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}



export default NavBar

