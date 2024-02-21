import React from 'react'

import './Navbar.css';
function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  custom-navbar shadow p-3 mb-5 ">
  <div className="container-fluid">
    <a className="navbar-brand mx-3 fw-bold" href="/">Vishu Saxena</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto  ">
        <li className="nav-item mx-3  ">
          <a className="nav-link  " aria-current="page" href="/">About </a>
        </li>
        <li className="nav-item mx-3 ">
          <a className="nav-link " href="/">Skills</a>
        </li>
        <li className="nav-item mx-3 ">
          <a className="nav-link " href="/">Projects</a>
        </li>
        <li className="nav-item mx-3 ">
          <a className="nav-link " href="/">Contact Me</a>
        </li>
        <li className="nav-item mx-3">
        <button type="button" className="btn btn-primary" >Download CV</button>

        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}



export default NavBar

