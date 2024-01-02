import '/assets/css/Projet.css';
import { HashLink as Link } from 'react-router-hash-link';
const Projet2 = () => {
    return (
        <div className='projectdetails'>
            <h1>Projet 2</h1>
            <p>Projet 2</p>
            <Link to="/#projects">Back to projects</Link>
        </div>
    )
}
export default Projet2;