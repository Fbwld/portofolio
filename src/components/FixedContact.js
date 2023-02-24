import {Container} from "react-bootstrap";
import "../css/FixedContact.css"
import React from 'react';
import {AiOutlineInstagram} from "react-icons/ai"
import {FiGithub, FiLinkedin} from "react-icons/fi"
import {HiOutlineMail} from "react-icons/hi"


export function FixedContact() {
  return (
    <section className="contact" id="contact">
    <Container >
        <div className="fixed-bottom ok-c">
            <div className="d-flex">
                <div className="left-c">
                    <a href="https://www.instagram.com/fbwld/">
                        <AiOutlineInstagram  size={25} className="icon-h"/>
                    </a>
                    <a href="https://github.com/Fbwld">
                        <FiGithub size={25} className="icon-h"/>
                    </a>
                    <a href="https://www.linkedin.com/in/febi-wulandari/">
                        <FiLinkedin size={25} className="icon-h"/>
                    </a>
                    <a href="mailto:febiwldr09@gmail.com">
                        <HiOutlineMail size={25} className="icon-h"/>
                    </a>
                    <div className="line-h"/>
                </div>
            </div>
        </div>
    </Container>
  </section>
)
}
