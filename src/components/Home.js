/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import "../css/Home.css"
import {Container, Row, Col} from "react-bootstrap";
import {SlArrowRightCircle} from "react-icons/sl"
import AOS from 'aos';
import headerImg from "../assets/img/frame1.png";
import TypingText from './TypingText';
import "aos/dist/aos.css"

export function Home({handleScroll}) {
 
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <section className="banner" id="home">
    <Container>
      <Row className="aligh-items-center" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear">
        <div />
        <Col xs={12} md={6} xl={7}>
            <div>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                <TypingText text="Hi! I'm Febi Wulandari Fullstack Developer" speed={80} />
              </h1>
              <p className="parag-home">I am a programming enthusiast that graduated from Information Management. I am very interested in learning things in the field of Fullstack Developer, and deepen it by attending training at the DumbWays Indonesian Bootcamp. Active in using several programming, namely JavaScript</p>
            </div>
            <div>
              <button onClick={handleScroll} id="button-connect" >Let’s Connect <SlArrowRightCircle/></button>
            </div>
        </Col>
        <Col xs={12} md={6} xl={5}>
        <div>
          <img src={headerImg} alt="Header Img"/>
        </div>
        </Col>
      </Row>
    </Container>
  </section>
)
}
