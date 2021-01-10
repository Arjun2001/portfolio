import React from "react";
import Fade from "react-reveal/Fade";
import "../css/Containers/Contact.css";

export function Contact() {
  return (
    <div>
    <div id="contact" className="contact">
      <Fade>
        <div>
          <br />
          <br />
          <br />
          <br />
          <br/>
          <h1 className="contact-hdr">Contact Me</h1>
          <h5>Whether it's a job opportunity, an invite to coffee,</h5>
          <h5>or feedback on my portfolio, my inbox is open!</h5>
          <br></br>
          <hr></hr>
          </div>
          </Fade>
          <div className='contact1' id="contact1">
          <Fade>
            <h6>
                I'm currently looking for any new opportunities preferably technical 
                <b> Summer Internships 2021</b>.If you have a question
                or just want to say hi, I'll definately to get back to you!
            </h6> 
            <div className = 'mail-btn'>
                <a href = "mailto:arjundevpk2001@gmail.com" className = "mail-link">Say Hello</a>
            </div>
          </Fade>
        </div>
        </div>
    </div>
  );
}

export default Contact;
