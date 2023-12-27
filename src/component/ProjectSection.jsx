import React from 'react';
import { Link } from 'react-router-dom';
import '/assets/css/ProjectsSection.css';

const ProjectSection = () => {
    return (
        <div className="projectSection" id='projects'>
            
            <Link to="/Projet 1">
                <div className="project">projet 1</div>
            </Link>

            <Link to="/Projet 2">
                <div className="project">projet 2</div>
            </Link>

            <Link to="/Projet 3">
                <div className="project">projet 3</div>
            </Link>

            <Link to="/Projet 4">
                <div className="project">projet 4</div>
            </Link>
            
        </div>  
    )
}
export default ProjectSection;