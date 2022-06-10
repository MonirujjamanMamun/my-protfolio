import { useEffect, useState } from "react";

const useProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/MonirujjamanMamun/my-protfolio/main/public/project.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return [projects, setProjects];
}

export default useProjects;