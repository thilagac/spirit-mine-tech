import React from "react";
import happy from "../component/image/happy.jpg";
import about from "../component/image/about.webp";
import featuer from "../component/image/featuer.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, fas } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div className="container" id="about">
      <h1 className="heading">
        <FontAwesomeIcon icon={fas.faUser} /> About
      </h1>
      <br />
      <br />
      <br />
      <div className="container-fluid about-full">
        <br />

        <div className="row text-center">
          <div className="col-md-6 col-lg-6 about">
            <br></br>
            <h3 className="mission">Mission statement</h3>
            <br />
            <p>
              At spiritmine, we believe in the power of technology to transform
              businesses and empower individuals. Our mission is to create
              innovative software solutions that are tailored to our clients’
              unique needs and goals. With our expertise and passion, we strive
              to make technology accessible, intuitive, and enjoyable for
              everyone.
            </p>
          </div>

          <div className="col-6 col-md-4 col-lg-6 text-center">
            <br />
            <img src={about} className="about-logo"></img>
            <br />
          </div>
        </div>
        <br></br>
      </div>
      <br></br>
      <div className="row about-full ">
        <div className=" col-lg-4 col-md-6 text-center">
          <br></br>

          <img src={featuer} className="featuer"></img>
        </div>

        <div className=" col-lg-4 col-md-6 ">
          <br />
          <div className="about">
            <br />
            <h3 className="mission ">Features</h3>
            <br />
            <ul>
              <li>We'll create software that fits your needs like a glove</li>
              <li>
                Our team of experts will develop tools that tackle any challenge
              </li>
              <li>
                Say goodbye to generic solutions, we'll build custom
                applications just for you
              </li>
              <li>Achieve your goals with our tailored software frameworks</li>
              <li>
                We'll turn your problems into opportunities with our innovative
                approach
              </li>
            </ul>
          </div>
        </div>
        <div className=" col-lg-4 col-md-4">
          <br></br>
          <br />
          <h3 className="mission ">Benefits</h3>

          <br />
          <ul>
            <li>
              <b> Faster problem-solving:</b> Our custom software applications
              allow you to quickly identify and address issues, saving you
              valuable time and resources.
            </li>
          </ul>
        </div>
      </div>
      <br></br>
      <div className="row  about-full text-center">
        <div className="col-md-6 col-lg-6 ">
          <br />
          <div className="about ">
            <h3 className="mission ">Happy customer</h3>
            <br />
            <p>
              We’re the friendly tech wizards who create magic with code and
              make your dreams come true.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <br />
          <img src={happy} className="happy"></img>
        </div>
      </div>
    </div>
  );
}

export default About;
