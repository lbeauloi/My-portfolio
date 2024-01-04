import React from "react";
import ScrollDownArrow from "./ScrollDownArrow";
import "/assets/css/Home.css";

const Home = () => {

    return(
      <>
        <section className="Home">
          <p className="line1"><em>hello, i'm</em></p>
          <img className="line2" src="/assets/img/lucasbeauloi.svg"></img>
          <p className="line3">a junior front-end developer</p>
          <p className="line4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sed eos porro vero omnis veritatis quaerat, numquam repellendus natus eveniet aliquid ea perspiciatis ut expedita deserunt, ducimus quas consequatur. Modi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus exercitationem dolores ipsa iste!</p>
          <div className="line5"><ScrollDownArrow/></div>
        </section>

        <section className="projectHoriz">
          <section className="Projet1" id="projects">
            <div className='projectContainer' id="projects">
              <div className='projectImg projectImg1'>
              </div>

              <div className='projectdetails'>
                  <h2>The Collection</h2>
                  <p className='description'>A collection of my favorite artists. The cards are dynamically generated in JavaScript. The concepts of DOM, basic HTML CSS JS and responsive design are used in this project.</p>
                  <div className='langageTag'>
                      <p>html/css</p>
                      <p>js</p>
                      <p>dom</p>
                      <p>responsive</p>
                  </div>
                  <a href="https://lbeauloi.github.io/The-Collection/" target="_blank" className='projectLink'>See the project</a>
                  </div>
          </div>
        </section>

          <section className="Projet2">
          <div className='projectContainer'>
            <div className='projectImg projectImg2'>
            </div>

            <div className='projectdetails'>
                <h2>Weather App</h2>
                <p className='description'>A collection of my favorite artists. The cards are dynamically generated in JavaScript. The concepts of DOM, basic HTML CSS JS and responsive design are used in this project.</p>
                <div className='langageTag'>
                    <p>html/css</p>
                    <p>js</p>
                    <p>dom</p>
                    <p>responsive</p>
                </div>
                <a href="https://lbeauloi.github.io/Weather-app/" target="_blank" className='projectLink'>See the project</a>
            </div>
        </div>
          </section>

          <section className="Projet3">
          <div className='projectContainer'>
            <div className='projectImg projectImg3'>
            </div>

            <div className='projectdetails'>
                <h2>Sunnyside Agency</h2>
                <p className='description'>A collection of my favorite artists. The cards are dynamically generated in JavaScript. The concepts of DOM, basic HTML CSS JS and responsive design are used in this project.</p>
                <div className='langageTag'>
                    <p>html/css</p>
                    <p>js</p>
                    <p>dom</p>
                    <p>responsive</p>
                </div>
                <a href="https://lbeauloi.github.io/Sunnyside/" target="_blank" className='projectLink'>See the project</a>
            </div>
        </div>
          </section>

          <section className="Projet4">
          <div className='projectContainer'>
            <div className='projectImg projectImg4'>
            </div>

            <div className='projectdetails'>
                <h2>Movie Browser</h2>
                <p className='description'>A collection of my favorite artists. The cards are dynamically generated in JavaScript. The concepts of DOM, basic HTML CSS JS and responsive design are used in this project.</p>
                <div className='langageTag'>
                    <p>html/css</p>
                    <p>js</p>
                    <p>dom</p>
                    <p>responsive</p>
                </div>
                <a href="https://lbeauloi.github.io/The-Collection/" target="_blank" className='projectLink'>See the project</a>
            </div>
        </div>
          </section>
        </section>


        
        </>
        
    )
}
export default Home;