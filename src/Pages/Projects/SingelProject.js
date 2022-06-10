import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import industry from '../../Image/industry_full.png'

const SingelProject = ({ project }) => {
    const [details, setDetails] = useState();
    console.log(details)
    const { name, img, description, script, live_site, code_link, id } = project;


    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
            <div className='h-96 carousel carousel-vertical rounded-box'>
                <figure><img src={industry} className='carousel-item h-full' alt="Shoes" /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                {/* <p> <span className='font-bold'>Based On Script :</span> <span className='text-sm'>{script}</span></p>
                <ul><span className='font-bold'>Feature :</span> {description.map(d => <li>{d}</li>)}</ul> */}
                <div className="card-actions justify-center">
                    <Link to={`/projectdetails/${id}`} className="btn btn-primary">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default SingelProject;