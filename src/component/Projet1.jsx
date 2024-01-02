import { HashLink as Link } from 'react-router-hash-link';
import '/assets/css/Projet.css';

const Projet1 = () => {
    return (
        <>
        <div className='projectdetails'>
            <h1>Projet 1</h1>
            <p>Projet 1</p>
            <Link to="/#projects">Back to projects</Link>
        </div>
        </>
    )
}

export default Projet1;