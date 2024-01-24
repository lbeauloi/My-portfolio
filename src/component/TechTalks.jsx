import '/assets/css/TechTalks.css';
const TechTalks = () => {
  return (
    <div className="TechTalkContainer">
      <h1 className='TechTitle'>Tech Talks</h1>
      <p className='TechDescription'>During my training at BeCode, I had the opportunity to present several "tech talks." The goal of these brief presentations, lasting about ten minutes each, is to promote awareness and encourage technological exploration. <br /> Here are the 5 tech talks that I have presented, happy reading!
      </p>
      <div className='TechTalkDiv'>
        <div className='Tech1' onClick={() => window.open("/assets/TechTalks/Tech_Talk_1_Images_Format.pdf", "_blank")}>Open</div>
        <div className='Tech2' onClick={() => window.open("/assets/TechTalks/Tech_Talk_2_UI-UX_design.pdf", "_blank")}>Open</div>
        <div className='Tech3' onClick={() => window.open("/assets/TechTalks/Tech_Talk_3_WordPress.pdf", "_blank")}>Open</div>
        <div className='Tech4' onClick={() => window.open("/assets/TechTalks/Tech_Talk_4_GSAP.pdf", "_blank")}>Open</div>
        <div className='Tech5' onClick={() => window.open("", "_blank")}>Open</div>
      </div>
    </div>
  )
}
export default TechTalks;