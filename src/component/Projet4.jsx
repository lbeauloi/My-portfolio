import '/assets/css/Projet.css';
import { HashLink as Link } from 'react-router-hash-link';
const Projet4 = () => {
    return (
        <>
        <div className='projectContainer'>
            <div className='projectImg projectImg4'></div>
            <div className='projectdetails'>
                <h1>Movie Browser</h1>
                <p>This project is currently being reworked, it will soon be updated and available</p>
                <Link to="/#projects" className='backArrow'>&#8592;</Link> <br />
                <a href="" target="_blank" className='projectLink'>See the project</a>
            </div>
        </div>
        </>
        
    )
}
export default Projet4;