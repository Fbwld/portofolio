/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React from 'react';
import "../css/Home.css"
import {Container, Row, Col} from "react-bootstrap";
import {SlArrowRightCircle} from "react-icons/si"
import headerImg from "../assets/img/frame1.png";
import TypingText from './TypingText';

export function Home() {
  return (
    <section className="banner" id="home">
    <Container>
      <Row className="aligh-items-center">
        <div />
        <Col xs={12} md={6} xl={7}>
            <div>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                <TypingText text="Hi! I'm Febi Wulandari Fullstack Developer" speed={80} />
                 <p className="parag-home">I am a programming enthusiast that graduated from Information Management. I am very interested in learning things in the field of Fullstack Developer, and deepen it by attending training at the DumbWays Indonesian Bootcamp. Active in using several programming, namely JavaScript (include ReactJs and nodeJs)</p>
              </h1>
              <button id="button-connect">Let’s Connect</button>
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
