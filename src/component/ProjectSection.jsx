import React from 'react';
import { Link } from 'react-router-dom';

const ProjectSection = () => {
    return (
        <div className="projectSection" id='projects'>
            <div className="project">
                <Link to="/Projet 1">projet 1</Link>
            </div>

            <div className="project">
                <Link to="/Projet 2">projet 2</Link>
            </div>

            <div className="project">
                <Link to="/Projet 3">projet 3</Link>
            </div>

            <div className="project">
                <Link to="/Projet 4">projet 4</Link>
            </div>
        </div>  
    )
}
export default ProjectSection;