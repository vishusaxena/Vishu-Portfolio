import React from 'react'
import './About.css';
import {useTypewriter,Cursor} from 'react-simple-typewriter';
export default function About(props){
      const [text]=useTypewriter({
         words:['Web Developer ', 'Competitive coder'],
         loop:{},
         typeSpeed:120,
         deleteSpeed:80,
      });
    return(

        <>
        <div className=' d-flex sm:d-block' id='about'> 
        
        <div className='w-50 custom-container  ' style={{marginTop:"150px"}} >
        
           <h1 style={{color:props.mode==="dark" ? 'white':'black' }}>Hi &#x1F590;, I am </h1>
           <h1 style={{color:props.mode==="dark" ? 'white':'black' }}>Vishu Saxena</h1>
           <h4 style={{color:props.mode==="dark" ? 'white':'black' }}>
            I am a <b style={{color:props.mode==="dark" ? 'Yellow':'blueviolet' }}>{text} <Cursor/></b>
            
           </h4>
           
        <p style={{color:props.mode==="dark" ? 'white':'black' }}>
        I am an undergrad and pursuing B.Tech in Computer Science and Engineering from SRMS Institute.I have good knowledge about C++,Python, Problem solving and Web Development fundamentals as I has build projects related to it.
        </p>
        
        
        <a href='Vishu_Resume.pdf' download className ="btn btn-outline-primary btn-lg " role="button" aria-pressed="true">Download CV</a>
        <button type="button" className="btn btn-lg btn-outline-primary mx-3" onClick={() => props.click('contact')}>Let's Connect!</button>
       
        </div>
        <div className='container w-50 ' style={{marginTop:"170px ",marginLeft:"220px"}}>
        <img  alt="Coding" width="400" src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"/>

        </div>
        <hr/>
        </div>
        
        </>    );

}
