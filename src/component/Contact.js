import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,fas } from '@fortawesome/free-solid-svg-icons'
import men from '../component/image/men.webp'
import { faInstagram,faFacebook,faTwitter,faLinkedin } from "@fortawesome/free-brands-svg-icons";
function Contact() {
  return (
    <div>
      <div className="container">
        <div className="container-fluid">
        <br/>   <br/>   <br/>
            <h1 className='heading'> <FontAwesomeIcon icon={fas.faAddressBook} />  Contact   </h1>
            <br/><br/><br/>
          <div className="row">   
            <div className="col-lg-4 col-md-6 about-full">
               <div >
                 <ul className="contact  ">
                    <li className="list-Contact"><span> <FontAwesomeIcon icon={fas.faPhone}  bounce  className="phone"/> </span><b>Phone : </b> +91 90787***00</li>
                    <hr/>
                    <li className="list-Contact"> <span> <FontAwesomeIcon icon={fas.faEnvelope} bounce className="email" /> </span> <b>Email :</b> info@spiritminetech.in </li>
                    <hr/>
                    <li className="list-Contact"> <span> <FontAwesomeIcon icon={faInstagram}  bounce className="inta" /> </span> <b>Instragram :</b> spiritmineteah_12</li>
                    <hr/>
                    <li className="list-Contact"> <span> <FontAwesomeIcon icon={faFacebook}   bounce className="faceBook"/> </span><b>FaceBook :</b> spiritminetech.com</li>
                    <hr/>
                    <li className="list-Contact"> <span> <FontAwesomeIcon icon={faLinkedin}  bounce className="Linked"/> </span><b>LinkedIn :</b> info_learn</li>
                    <hr/>
                    <li className="list-Contact"> <span> <FontAwesomeIcon icon={faTwitter}  bounce className="twitter" /> </span><b>Twitter :</b> infoSpiritminetech</li>
                    <hr/>
                 </ul>
               </div>

            </div>
            <br/>
            <div className="col-lg-6 col-md-6 ">
                <h3>Our Testimonials</h3>
            <br/>    
         
              <div>
              <img src={men} className="contact-img "></img> 
              <h4>HR Manager</h4>
              </div><br/>

              <div>
              <img src={men} className="contact-img"></img> 
            
              </div><br/>
              <div>
              <img src={men} className="contact-img "></img> 
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
