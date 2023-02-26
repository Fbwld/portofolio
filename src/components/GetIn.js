/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import {Container} from "react-bootstrap";
import "../css/GetIn.css"
import AOS from 'aos';
import "aos/dist/aos.css"
import {HiOutlineMail} from "react-icons/hi"
import {AiOutlineInstagram} from "react-icons/ai"
import {FiGithub, FiLinkedin} from "react-icons/fi"
import bg from "../assets/img/bg-ijau.svg"

export function GetIn() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <div style={{
        backgroundColor : "#0a192f"
    }}>
    <section className="getin" id="getin">
        <Container>
          <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">Get In Touch</h1>
          <div className="text-skill">
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
                Whether you have questions, feedback, or just want to say hi, feel free to get in touch.
            </p>
            </div>
            <div className="d-flex ic-g">
                    <a href="https://www.instagram.com/fbwld/">
                        <AiOutlineInstagram  size={25} className="icon-g"/>
                    </a>
                    <a href="https://github.com/Fbwld">
                        <FiGithub size={25} className="icon-g"/>
                    </a>
                    <a href="https://www.linkedin.com/in/febi-wulandari/">
                        <FiLinkedin size={25} className="icon-g"/>
                    </a>
                    <a href="mailto:febiwldr09@gmail.com">
                        <HiOutlineMail size={25} className="icon-g"/>
                    </a>
                </div>
        </Container>    
    </section>
    <div style={{backgroundImage : `url(${bg})`}} >
        <div style={{
            width:"100%",
            height:"10vw"
        }}/>
    <div/>
    </div>
    </div>
  );
}
