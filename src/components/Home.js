import {Container, Row, Col} from "react-bootstrap";
import headerImg from "../assets/img/frame1.png";
import "../css/Home.css"
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react';
import TypingText from './TypingText';

export const Home = () => {
  return (
    <section className="banner" id="home">
    <Container>
      <Row className="aligh-items-center">
        <Col xs={12} md={6} xl={7}>
            <div>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1><TypingText text="Hi! I'm Febi Wulandari Fullstack Developer" speed={80} /></h1>
              <p className="parag-home">I am a programming enthusiast that graduated from Information Management. I am very interested in learning things in the field of Fullstack Developer, and deepen it by attending training at the DumbWays Indonesian Bootcamp. Active in using several programming, namely JavaScript (include ReactJs and nodeJs)</p>
              <div className="icon-widht">
                <a href="https://www.linkedin.com/in/febi-wulandari/"><LinkedInIcon sx={{ fontSize: 40 }} className="icon-h"/></a>
                <a href="https://github.com/Fbwld"><GitHubIcon sx={{ fontSize: 40 }} className="icon-h"/></a>
                <a href="https://www.instagram.com/fbwld/"><InstagramIcon sx={{ fontSize: 40 }} className="icon-h"/></a>
              </div>
              <button >Let’s Connect<ArrowCircleRightIcon  sx={{ fontSize: 30 }}/></button>
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
