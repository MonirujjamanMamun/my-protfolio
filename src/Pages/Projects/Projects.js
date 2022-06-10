import React from 'react';
import useProjects from '../Hooks/useProjects';
import SingelProject from './SingelProject';

const Projects = () => {
    const [projects, setProjects] = useProjects()
    console.log(projects)
    return (<>
        <h1 className='text-center p-3 font-bold my-8 text-3xl'>Recent Projects</h1>
        <div className='grid sm:grid-cols-1 md:grid-cols-3 w-11/12 mx-auto mt-4'>
            {projects.map(project => <SingelProject key={project.id} project={project} />)}
        </div>
    </>);
};

export default Projects;