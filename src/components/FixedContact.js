import {Container} from "react-bootstrap";
import "../css/FixedContact.css"
import React from 'react';
import {AiOutlineInstagram} from "react-icons/ai"
import {FiGithub, FiLinkedin} from "react-icons/fi"

export function FixedContact() {
  return (
    <section className="banner" id="home">
    <Container >
        <div className="fixed-bottom">
            <div className="d-flex">
                <div className="left-c">
                    <a href="https://www.instagram.com/fbwld/"><AiOutlineInstagram  size={25} className="icon-h"/></a>
                    <a href="https://github.com/Fbwld"><FiGithub size={25} className="icon-h"/></a>
                    <a href="https://www.linkedin.com/in/febi-wulandari/"><FiLinkedin size={25} className="icon-h"/></a>
                    <div className="line-h"/>
                </div>
                <div className="right-c">
                    <a className="text-h" href="mailto:febiwldr09@gmial.com">febiwldr09@gmial.com</a>
                    <div className="line-h"/>
                </div>
            </div>
        </div>
    </Container>
  </section>
)
}
