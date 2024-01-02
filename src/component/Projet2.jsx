import '/assets/css/Projet.css';
import { HashLink as Link } from 'react-router-hash-link';
const Projet2 = () => {
    return (
        <>
        <div className='projectContainer'>
            <div className='projectImg projectImg2'></div>
            <div className='projectdetails'>
                <h1>The Weather App</h1>
                <p>This is a weather application made in JavaScript. I used an <a href="https://openweathermap.org/api">API</a> to fetch the data</p>
                <Link to="/#projects" className='backArrow'>&#8592;</Link> <br />
                <a href="https://lbeauloi.github.io/Weather-app/" target="_blank" className='projectLink'>See the project</a>
            </div>
        </div>
        </>
    )
}
export default Projet2;