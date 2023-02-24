/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import {Container, Row, Col} from "react-bootstrap";
import "../css/Skills.css"
import {GrMysql} from "react-icons/gr"
import {SiMongodb, SiExpress, SiPostgresql, SiDelphi} from "react-icons/si"
import {FaNodeJs, FaReact, FaCss3Alt, FaBootstrap} from "react-icons/fa"
import {IoLogoHtml5, IoLogoJavascript} from "react-icons/io"
import {TbBrandReactNative} from "react-icons/tb"
import AOS from 'aos';
import "aos/dist/aos.css"

export function Skills() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <section className="skills" id="skills">
        <Container>
        <Row className="aligh-items-center">
          <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">My Experience</h1>
          <div className="text-skill">
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
            Hi there! My name is Febi and I love learning about new technologies. I have experience as a web developer for about a year and as a desktop developer for 2 years. Here are some of the technologies I have been working with recently:
            </p>
          </div>
            <Col className="d-felx" xs={12} md={6} xl={6} data-aos="fade-right" data-aos-duration="2000">
              <div className="s-left">
                <h2>FrontEnd Developer</h2>
                <div className="s-row" >
                  <div className="s-column">
                    <div>
                      <h3><IoLogoHtml5 className="s-logo"/>Html</h3>
                      <p>Experienced</p>
                    </div> 
                    <div>
                      <h3><FaCss3Alt className="s-logo"/>CSS</h3>
                      <p>Experienced</p>
                    </div>
                    <div>
                      <h3><FaBootstrap className="s-logo"/>Boostrap</h3>
                      <p>Experienced</p>
                    </div>
                  </div>
                  <div className="s-column">
                    <div>
                      <h3><IoLogoJavascript className="s-logo"/>Javascript</h3>
                      <p>Experienced</p>
                    </div>
                    <div>
                    <h3><FaReact className="s-logo"/>ReactJs</h3>
                    <p>Experienced</p>
                    </div>
                    <div>
                      <h3><TbBrandReactNative className="s-logo"/>ReactNative</h3>
                      <p>Experienced</p>
                    </div> 
                  </div>
                </div>
              </div> 
            </Col>
            <Col xs={12} md={6} xl={6} data-aos="fade-left" data-aos-duration="2000">
              <div className="s-right">
                <h2>BackEnd Developer</h2>
                <div className="s-row">
                  <div className="s-column">
                    <div>
                      <h3><FaNodeJs className="s-logo"/>NodeJs</h3>
                      <p>Experienced</p>
                    </div> 
                    <div>
                      <h3><SiExpress className="s-logo"/>ExpressJs</h3>
                      <p>Experienced</p>
                    </div>
                    <div>
                      <h3><GrMysql className="s-logo"/>MySQL</h3>
                      <p>Experienced</p>
                    </div> 
                  </div>
                  <div className="s-column">
                    <div>
                      <h3><SiPostgresql className="s-logo"/>PostgreSql</h3>
                      <p>Experienced</p>
                    </div> 
                    <div>
                      <h3><SiMongodb className="s-logo"/>MongoDB</h3>
                      <p>Basic</p>
                    </div> 
                  </div>
                </div>  
              </div>
            </Col>
        </Row>
        </Container>
    </section>
  );
}
