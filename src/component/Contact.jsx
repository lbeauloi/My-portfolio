import '/assets/css/Contact.css'
const Contact = () => { 
    return (
        <>
        <div className='contactContainer'id='contact'>
            <img className="line1" src="/assets/img/letsconnect.svg" alt="" />
            <a className='line2' href="">l.beauloi@gmail.com</a>
            <div className='line3'>
                <p>Follow me here</p> <br />
                <a className='btn1' href="">Btn1</a>
                <a className= 'btn2'href="">Btn2</a>
            </div>
            <p className='line4'>Coded by <a href="https://www.linkedin.com/in/lucas-beauloi/" target='_blank'><strong>Lucas Beauloi</strong></a>, designed by <a href="http://laurakeerman.be/" target='_blank'><strong>Laura Keerman</strong></a></p>
        </div>
        </>

    );
    }
    export default Contact;