import '/assets/css/Projet.css';
import { HashLink as Link } from 'react-router-hash-link';
const Projet3 = () => {
    return (
        <>
        <div className='projectContainer'>
            <div className='projectImg projectImg3'></div>
            <div className='projectdetails'>
                <h1>Sunnyside Agency</h1>
                <p>This is a showcase site for a (fictitious) creative agency. The design was provided and the goal was to reproduce the “pixel perfect” site. This project uses basic concepts such as semantic HTML, flexboxes and grids, SASS and the BEM method, responsive and mobile first design.</p>
                <Link to="/#projects" className='backArrow'>&#8592;</Link> <br />
                <a href="https://lbeauloi.github.io/Sunnyside/" target="_blank" className='projectLink'>See the project</a>
            </div>
        </div>
        </>
    )
}
export default Projet3;