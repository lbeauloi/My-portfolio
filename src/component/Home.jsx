import React from 'react';
import ScrollDownArrow from "./ScrollDownArrow";
import BackToTop from './BackToTop';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import "/assets/css/Home.css";
import '/assets/css/Contact.css';
import logoHome from "/assets/img/lucasbeauloi.svg"
import logoContact from "/assets/img/letsconnect.svg"

gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const component = useRef();
  const slider = useRef();
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 0.5, //jouer sur la vityesse de scroll 
          snap: 1 / (panels.length - 1), //snap = sauter d'une section à l'autre
          end: () => "+=" + slider.current.offsetWidth,
          markers: false, // indicateur du type "end" "scroll start" "start" etc etc utile pour dev mais masquer pour le deployement final
        },
      });
    }, component);
    return () => ctx.revert();
  });
    return(
      <>
      
      <div className="App" ref={component}>

        <section className="Home" id='home'> {/* HOME */}
          <p className="line1" id="hello"><em>hello, i'm</em></p>
          <div className='line2'><img src={logoHome} alt="Lucas Beauloi" /></div>
          <p className="line3">a junior front-end developer</p>
          <p className="line4">Currently undergoing front-end training at BeCode, I am eager to apply my skills and actively seeking a challenging internship opportunity. Let's build something remarkable together!</p>
          <div className="line5"><ScrollDownArrow/></div>
        </section>    
        

        <section className="container" id='projects' ref={slider}> {/* PROJETS */}
            <div class="panel">
              <div className='projectContainer'>
                <div className='projectImg1'>
                  <p className='numIndex'>01.</p>
                </div>

                <div className='projectdetails'>
                    <h2>The Collection</h2>
                    <p className='description'>My first project involves creating a collection of my favorite artists, where artist cards are dynamically generated using JavaScript. I implemented the project with a foundation in HTML and CSS, in addition to JavaScript. This collection highlights the concepts of responsiveness and DOM, ensuring a seamless and adaptive user experience. The integration of these principles allows for smooth navigation through the collection, providing a dynamic and interactive presentation of my favorite artists.</p>
                    <div className='langageTag'>
                        <p>html/css</p>
                        <p>js</p>
                        <p>dom</p>
                        <p>responsive</p>
                    </div>
                    <a href="https://lbeauloi.github.io/The-Collection/" target="_blank" className='projectLink'>See the project</a>
                
                </div>
              </div>
            </div>
            
            <div class="panel">
              <div className='projectContainer'>
                <div className='projectImg2'>
                  <p className='numIndex'>02.</p>
                </div>

              <div className='projectdetails'>
                  <h2>Weather App</h2>
                  <p className='description'>I developed a weather application. To achieve this, I utilized an API to fetch weather data and another API to obtain visuals of the respective cities. This project not only showcases my proficiency in integrating APIs but also emphasizes the importance of data visualization in providing a comprehensive weather experience. By combining these elements, the application offers users both accurate weather information and a visually engaging representation of the chosen city.</p>
                  <div className='langageTag'>
                      <p>html/css</p>
                      <p>js</p>
                      <p>dom</p>
                      <p>api</p>
                  </div>
                  <a href="https://lbeauloi.github.io/Weather-app/" target="_blank" className='projectLink'>See the project</a>
                
              </div>
            </div>
            </div>
            
            <div class="panel">
              <div className='projectContainer'>
                  <div className='projectImg3'>
                    <p className='numIndex'>03.</p>
                  </div>

                  <div className='projectdetails'>
                      <h2>Sunnyside Agency</h2>
                      <p className='description'>This is a showcase website, undertaking the challenge of reproducing a pixel-perfect design from Figma. Utilizing HTML and SCSS, I implemented the concepts learned during my training. The objective was to craft a fictional website for a creative agency named 'Sunnyside Agency.' This exercise not only honed my skills in precision coding but also allowed me to bring a Figma design to life, showcasing my proficiency in front-end development and design implementation.</p>
                      <div className='langageTag'>
                          <p>html/scss</p>
                          <p>pixel perfect</p>
                      </div>
                      <a href="https://lbeauloi.github.io/Sunnyside/" target="_blank" className='projectLink'>See the project</a>
                    
                  </div>
                </div>
            </div>
            
            <div class="panel">
              <div className='projectContainer'>
                  <div className='projectImg4'>
                    <p className='numIndex'>04.</p>
                  </div>

                  <div className='projectdetails'>
                      <h2>Movie Browser</h2>
                      <p className='description'>This was my first React project, and the first time using of Netlify for the final build. This is a clone of a streaming site. Leveraging the power of React, I implemented features such as React Router DOM for seamless navigation. To populate the site with content, I utilized an API to fetch data, including details like titles, genres, and release years. The project also involved the use of HTML and SCSS to structure and style the application. This venture into React showcases my progression in utilizing this powerful library to build dynamic and interactive web applications.</p>
                      <div className='langageTag'>
                          <p>html/scss</p>
                          <p>react</p>
                          <p>routing</p>
                          <p>netlify</p>
                      </div>
                      <a href="https://github.com/lbeauloi/Movie-Browser" target="_blank" className='projectLink'>See the project</a>
                    
                  </div>
                </div>
            </div>
        </section>

        <section className='contactContainer'id='contact'> {/* CONTACT*/}
            <img className="line1" id='letsConnectLogo' src={logoContact} alt="" />
            <a className='line2' href = "mailto: l.beauloi@gmail.com">l.beauloi@gmail.com</a>
            <div className='line3'>
                <div className='follow'>
                  <p>Follow me here</p>
                </div>

                <div className='links'>
                  <a className='btn1' target='_blank' href="https://www.linkedin.com/in/lucas-beauloi/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg></a>
                  <a className= 'btn2' target='_blank' href="https://github.com/lbeauloi"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                </div>
            </div>
            <p className='line4'>Coded by <a href="https://www.linkedin.com/in/lucas-beauloi/" target='_blank'><strong>Lucas Beauloi</strong></a>, co-designed with <a href="http://laurakeerman.be/" target='_blank'><strong>Laura Keerman</strong></a></p>
            <BackToTop/>
        </section>
      </div>
      </>
        
    )
}
export default Home;

