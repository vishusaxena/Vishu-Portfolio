import React from 'react'
import Skillitem from './Skillitem';

export default function Skills(props) {
    return (
        <>
            <div className='container w-60' style={{ marginTop: "100px" }} id='skill'>
            <h1 className='text-center' style={{color:props.mode==="dark" ? 'white':'black' }}>My Skills</h1>
             <p  className='text-center'style={{color:props.mode==="dark" ? 'white':'black' }}>  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere maiores unde tempore expedita. Fugit dolores ea molestiae magnam eum dolor tempore nulla! Perferendis possimus vero pariatur architecto qui? Maiores nemo corporis libero vitae suscipit et ipsam adipisci sunt ut non harum amet illum dolores earum ad aut mollitia, numquam praesentium!
</p>
                <div className="row row-cols-1 row-cols-md-3 my-5">
                                           
                    
                    <Skillitem mode={props.mode}   dis="I had started my coding journey with C programming.I am proficient with fundamentals of C."  skill='C' url='https://www.cprogramming.com/'  imageUrl='https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg'/>

                    <Skillitem mode={props.mode}  dis="C++ is my comfartable language as I generally use it during problem solving or competitive Programming." skill='C++' url='https://www.w3schools.com/cpp/'  imageUrl='https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg'/>
                    
                    <Skillitem mode={props.mode}  dis="I learned Python during my second year of college as it is the part of the Course work ." skill='Python' url='https://www.python.org'  imageUrl='https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg'/>

                    <Skillitem mode={props.mode}  dis="I had good knowledge of Fundamentals of HTML and also I had done some projects using HTML." skill='HTML' url='https://www.w3.org/html/'  imageUrl='https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg'/>

                    <Skillitem mode={props.mode}  dis="I also have well knowledge in CSS as I had use CSS in many projects along with HTML. " skill='CSS' url='https://www.w3schools.com/css/'  imageUrl='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg'/>

                    <Skillitem mode={props.mode}  dis="Javascript is my hands-on language as I had use it more during my projects related to frontend ." skill='Javascript' url='https://developer.mozilla.org/en-US/docs/Web/JavaScript'  imageUrl='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'/>

                    <Skillitem mode={props.mode}  dis="Bootstarp is a component based CSS framework I used it many times and I have good knowledge of it." skill='Bootstrap' url='https://getbootstrap.com'  imageUrl='https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg'/>

                    <Skillitem mode={props.mode}  dis="React is the javascript Library I had high hands-on experience in this framework with some projects ." skill='React' url='https://react.dev/' imageUrl='https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg'/>

                    <Skillitem mode={props.mode}  dis="Tailwind css is also an CSS framework I also learned this with Bootsrtap to customize my projects ." skill='Tailwind css' url='https://tailwindcss.com/' imageUrl='https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'/>
                </div>
            </div>
        </>
    );
}
