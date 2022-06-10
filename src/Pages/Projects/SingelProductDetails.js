import React from 'react';
import { useParams } from 'react-router-dom';
import useProjects from '../Hooks/useProjects';

const SingelProductDetails = () => {
    let { id } = useParams();
    const [projects, setProjects] = useProjects()
    const projectDetails = projects.find(project => project.id == id);
    console.log(projectDetails)

    return (
        <div div class="hero min-h-screen bg-base-200" >
            <div class="hero-content flex-col lg:flex-row">
                <div class="h-96 carousel carousel-vertical rounded-box">
                    <div class="carousel-item h-full">
                        <img src={projectDetails?.img_home} />
                    </div>
                    <div class="carousel-item h-full">
                        <img src={projectDetails?.img_mid} />
                    </div>
                    <div class="carousel-item h-full">
                        <img src={projectDetails?.img_last} />
                    </div>
                </div>
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