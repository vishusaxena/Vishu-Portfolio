import React from 'react'



export default function Footer(props) {
  return (

    <>
      <hr></hr><div className={` text-center h-25   `} style={{backgroundColor:props.mode==="dark" ? 'black':'white' , color:props.mode==="dark" ? 'white':'black' }}>
         <div className='social-icons  '  style={{padding:"2rem 6rem 0rem 6rem",backgroundColor:props.mode==="dark" ? 'black':'white' , color:props.mode==="dark" ? 'white':'black' }}>
        <a href="https://linkedin.com/in/vishu saxena" target="blank"><img className='mx-3'align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="vishu saxena" height="30" width="40" /></a>
        <a href="https://instagram.com/ichvishu" target="blank"><img className='mx-3' align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="ichvishu" height="30" width="40" /></a>
        <a href="https://www.leetcode.com/vishusaxenavs31" target="blank"><img className='mx-3'align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg" alt="vishusaxenavs31" height="30" width="40" /></a>
        <a href="https://auth.geeksforgeeks.org/user/vishusax5nao" target="blank"><img className='mx-3'align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/geeks-for-geeks.svg" alt="vishusax5nao" height="30" width="40" /></a>
        <div className="text-center my-5" style={{color:props.mode==="dark" ? 'white':'black' }} >
    © 2024 Copyright<br></br>
    Made by Vishu Saxena
  </div>
        </div>
      </div>



    </>);
}
