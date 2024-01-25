import '/assets/css/TechTalks.css';
import Tech1 from '/assets/TechTalks/Tech_Talk_1_Images_Format.pdf';
import Tech2 from '/assets/TechTalks/Tech_Talk_2_UI-UX_design.pdf';
import Tech3 from '/assets/TechTalks/Tech_Talk_3_WordPress.pdf';
import Tech4 from '/assets/TechTalks/Tech_Talk_4_GSAP.pdf';

const TechTalks = () => {
  return (
    <div className="TechTalkContainer">
      <h1 className='TechTitle'>Tech Talks</h1>
      <p className='TechDescription'>During my training at BeCode, I had the opportunity to present several "tech talks." The goal of these brief presentations, lasting about ten minutes each, is to promote awareness and encourage technological exploration. <br /> Here are the 5 tech talks that I have presented, happy reading!
      </p>
      <div className='TechTalkDiv'>
        
        <a className='Tech1'href={Tech1} without rel="noopener noreferrer" target='_blank'>
          <p className='descTech'>images format</p>
          <p className='hoverText'>Open</p>
        </a>

        <a className='Tech2'href={Tech2} without rel="noopener noreferrer" target='_blank'>
          <p className='descTech'>ui/ux design</p>
          <p className='hoverText'>Open</p>

        </a>
        <a className='Tech3'href={Tech3} without rel="noopener noreferrer" target='_blank'>
          <p className='descTech'>wordpress</p>
          <p className='hoverText'>Open</p>

        </a>
        <a className='Tech4'href={Tech4} without rel="noopener noreferrer" target='_blank'>
          <p className='descTech'>gsap</p>
          <p className='hoverText'>Open</p>

        </a>
        <a className='Tech5'href="" without rel="noopener noreferrer" target='_blank'>
          <p className='descTech'>not defined</p>
          <p className='hoverText'>Open</p>

        </a>

      </div>
    </div>
  )
}
export default TechTalks;