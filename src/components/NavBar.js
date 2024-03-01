import React from 'react'
import  { useState } from 'react';

import './Navbar.css';
function NavBar(props) {
  const {mode,setmode}=useState('dark');
  return (
    <div>
      <nav className="navbar navbar-expand-lg  fixed-top custom-navbar shadow p-3 mb-5 ">
  <div className="container-fluid">
    <a  className="navbar-brand mx-3 fw-bold" href="\">Vishu Saxena</a >
    <button  className="navbar-toggler" type="a" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button >
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto  ">
        <li className="nav-item mx-3  ">
          <button  className="nav-link  btn" aria-current="page" href="\" onClick={() => props.click('about')}>About </button >
        </li>
        <li className="nav-item mx-3 ">
          <button  className="nav-link btn " href="\" onClick={() => props.click('skill')}>Skills</button >
        </li>
        <li className="nav-item mx-3 ">
          <button  className="nav-link btn " href="\" onClick={() => props.click('project')}>Projects</button >
        </li>
        <li className="nav-item mx-3 ">
          <button  className="nav-link btn " href="\"onClick={() => props.click('contact')}>Contact Me</button >
        </li>
        <li className="nav-item mx-3">
        <button  type="a" className="btn btn-primary" >Download CV</button >


        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}



export default NavBar

