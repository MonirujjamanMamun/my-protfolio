import React from 'react';
import { useParams } from 'react-router-dom';
import useProjects from '../Hooks/useProjects';

const SingelProductDetails = () => {
    let { id } = useParams();
    const [projects, setProjects] = useProjects()
    const projectDetails = projects.find(project => project.id == id);
    console.log(projectDetails)

    return (
        /*  <div className="card w-96 bg-base-100 shadow-xl">
             <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
             <div className="card-body">
                 <h2 className="card-title">{projectDetails?.name}</h2>
                 <p> <span className='font-bold'>Based On Script :</span> <span className='text-sm'>{projectDetails?.script}</span></p>
                 <ul><span className='font-bold'>Feature :</span> {projectDetails?.description.map(d => <li>{d}</li>)}</ul>
                 <div className="card-actions justify-center">
                     <Link to={`/projectdetails/${id}`} className="btn btn-primary">Details</Link>
                 </div >
             </div >
         </div > */

        <div div class="hero min-h-screen bg-base-200" >
            <div class="hero-content flex-col lg:flex-row">
                <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h2 className="card-title">{projectDetails?.name}</h2>
                    <p> <span className='font-bold'>Based On Script :</span> <span className='text-sm'>{projectDetails?.script}</span></p>
                    <ul><span className='font-bold'>Feature :</span> {projectDetails?.description.map(d => <li>{d}</li>)}</ul>
                    <a target='_blank' href={projectDetails?.live_site}><button class="btn btn-primary mx-4 px-10 mt-5">Live</button></a>
                    <a target='_blank' href={projectDetails?.code_link}><button class="btn btn-primary mx-4 px-10 mt-5">Code</button></a>
                </div>
            </div>
        </div >

    );
};

export default SingelProductDetails;