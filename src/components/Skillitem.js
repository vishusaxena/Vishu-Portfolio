import React from 'react'

export default function Skillitem(props) {
  return (
    <div>
       <div className="col mb-4">
                        <div className="card border border-white">
                            <a href={props.url} target="_blank" rel="noreferrer"> <img className='m-2 'src={props.imageUrl} alt="c" width="60" height="60" /> </a>
                            <div className="card-body">
                                <h5 className="card-title">{props.skill}</h5>
                                <p className="card-text">{props.dis}</p>
                            </div>
                        </div>
                    </div>
    </div>
  );
}
