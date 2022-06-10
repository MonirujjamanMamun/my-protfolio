import { useEffect, useState } from "react";

const useProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/MonirujjamanMamun/my-protfolio/809c92a2ec6e31ce02bd7520d7d9329937fc02cd/public/project.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return [projects, setProjects];
}

export default useProjects;