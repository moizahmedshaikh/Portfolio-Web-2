import React from "react";
import Image from "next/image";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <Image
          src="/images/profile2.jpg"
          alt="Profile Pic"
          height={2000}
          width={2000}
        />
        <div className="info-box">

          <div className="text">
            <h3>Hi Im</h3>
            <h1>Moiz Ahmed</h1>
            <span>FrontEnd Developer</span>
          </div>

          <div className="btn-group">
            <div className="btn"><Link className="aboutLink" href={"/my-cv.pdf"} target="_blank">Download CV</Link></div>
            <div className="btn"> <Link className="aboutLink" href={"/Contact"}>Contact</Link> </div>
          </div>

          <div className="socials">
            <Link style={{color:"black"}} href={"https://github.com/moizahmedshaikh"} target="_blank"><FaGithub  className="i"/></Link>

            <Link style={{color:"black"}} href={"https://www.linkedin.com/in/moiz-ahmed-6516b728a/"}target="_blank"><FaLinkedin  className="i"/></Link>

            <Link style={{color:"black"}} href={"https://en-gb.facebook.com/moizahmed.shiakh"} target="_blank"><FaFacebook  className="i"/></Link>
          
          </div>



        </div>


      </div>
    </section>
  );
};

export default About;
