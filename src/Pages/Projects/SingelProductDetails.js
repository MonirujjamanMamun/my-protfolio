import React from 'react';
import { useParams } from 'react-router-dom';
import useProjects from '../Hooks/useProjects';

const SingelProductDetails = () => {
    let { id } = useParams();
    const [projects, setProjects] = useProjects()
    const projectDetails = projects.find(project => project.id == id);
    console.log(projectDetails)

    return (
        <div div className="hero min-h-screen bg-base-200" >
            <div className="hero-content flex-col lg:flex-row">
                <div className="h-96 carousel carousel-vertical rounded-box">
                    <div className="carousel-item h-full">
                        <img src={projectDetails?.img_home} />
                    </div>
                    <div className="carousel-item h-full">
                        <img src={projectDetails?.img_mid} />
                    </div>
                    <div className="carousel-item h-full">
                        <img src={projectDetails?.img_last} />
                    </div>
                </div>
                <div>
                    <h2 className="card-title">{projectDetails?.name}</h2>
                    <p> <span className='font-bold'>Based On Script :</span> <span className='text-sm'>{projectDetails?.script}</span></p>
                    <ul><span className='font-bold'>Feature :</span> {projectDetails?.description.map(d => <li className='list-disc ml-6'>{d}</li>)}</ul>
                    <a target='_blank' href={projectDetails?.live_site}><button className="btn btn-primary mx-4 px-10 mt-5">Live</button></a>
                    <a target='_blank' href={projectDetails?.code_link}><button className="btn btn-primary mx-4 px-10 mt-5">Code</button></a>
                </div>
            </div>
        </div >

    );
};

export default SingelProductDetails;