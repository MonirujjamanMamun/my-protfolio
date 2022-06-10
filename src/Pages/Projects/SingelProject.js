import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SingelProject = ({ project }) => {
    const { name, img, description, script, live_site, code_link, id } = project;
    console.log(name);
    let { userId } = useParams();
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                {/* <p> <span className='font-bold'>Based On Script :</span> <span className='text-sm'>{script}</span></p>
                <ul><span className='font-bold'>Feature :</span> {description.map(d => <li>{d}</li>)}</ul> */}
                <div className="card-actions justify-center">
                    {/* <Link to='/projectdetails'></Link> */}
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingelProject;