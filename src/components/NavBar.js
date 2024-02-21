import React from 'react'


function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand mx-3" href="/">Vishu Saxena</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto  ">
        <li className="nav-item mx-3  ">
          <a className="nav-link text-white " aria-current="page" href="/">About </a>
        </li>
        <li className="nav-item mx-3 ">
          <a className="nav-link text-white" href="/">Skills</a>
        </li>
        <li className="nav-item mx-3 ">
          <a className="nav-link text-white" href="/">Projects</a>
        </li>
        <li className="nav-item mx-3 ">
          <a className="nav-link text-white" href="/">Contact Me</a>
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

