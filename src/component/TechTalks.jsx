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
            <a href={Tech1} without rel="noopener noreferrer" target='_blank'><div className='Tech1'>Open</div></a>
        
            <a href={Tech2} target='_blank'><div className='Tech2'>Open</div></a>

            <a href={Tech3} target='_blank'><div className='Tech3'>Open</div></a>

            <a href={Tech4} target='_blank'><div className='Tech4'>Open</div></a>

            <a href="" target='_blank'><div className='Tech5'>Open</div></a>
  
      </div>
    </div>
  )
}
export default TechTalks;