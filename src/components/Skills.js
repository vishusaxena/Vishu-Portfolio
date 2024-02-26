import React from 'react'
import Skillitem from './Skillitem';

export default function Skills() {
    return (
        <>
            <div className='container w-60' style={{ marginTop: "100px" }}>
            <h1 className='text-center'>My Skills</h1>
             <p  className='text-center'>  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere maiores unde tempore expedita. Fugit dolores ea molestiae magnam eum dolor tempore nulla! Perferendis possimus vero pariatur architecto qui? Maiores nemo corporis libero vitae suscipit et ipsam adipisci sunt ut non harum amet illum dolores earum ad aut mollitia, numquam praesentium!
</p>
                <div className="row row-cols-1 row-cols-md-3 my-5">
                                           
                    
                    <Skillitem skill='C' url='https://www.cprogramming.com/'  imageUrl='https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg'/>

                    <Skillitem skill='C++' url='https://www.w3schools.com/cpp/'  imageUrl='https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg'/>
                    
                    <Skillitem skill='Python' url='https://www.python.org'  imageUrl='https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg'/>

                    <Skillitem skill='HTML' url='https://www.w3.org/html/'  imageUrl='https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg'/>

                    <Skillitem skill='CSS' url='https://www.w3schools.com/css/'  imageUrl='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg'/>

                    <Skillitem skill='Javascript' url='https://developer.mozilla.org/en-US/docs/Web/JavaScript'  imageUrl='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'/>

                    <Skillitem skill='Bootstrap' url='https://getbootstrap.com'  imageUrl='https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg'/>

                    <Skillitem skill='React' url='https://react.dev/' imageUrl='https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg'/>

                    <Skillitem skill='Tailwind css' url='https://tailwindcss.com/' imageUrl='https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'/>
                </div>
            </div>
        </>
    );
}
