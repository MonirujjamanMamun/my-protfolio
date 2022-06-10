import React, { useEffect, useState } from 'react';
import SingelProject from './SingelProject';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("project.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    console.log(projects)
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-3 w-11/12 mx-auto mt-4'>
            {projects.map(project => <SingelProject key={project.id} project={project} />)}
        </div>
    );
};

export default Projects;