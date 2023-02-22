import {Container, Row, Col} from "react-bootstrap";
import "../css/Skills.css"
import {bootstrap, css, express, Html5, javascript, mongodb, mysql, nodejs, postgresql, react } from "../assets/icon/index"
import {GrMysql} from "react-icons/gr"
import {SiMongodb, SiExpress, SiPostgresql, SiDelphi} from "react-icons/si"
import {FaNodeJs, FaReact, FaCss3Alt, FaBootstrap} from "react-icons/fa"
import {IoLogoHtml5, IoLogoJavascript} from "react-icons/io"
import { ProgressBarSkill } from "./ProgressBarSkill";

export const Skills = () => {
  return (
    <>
    <section className="skills" id="skills">
        <Container>
        <Row className="aligh-items-center">
          <h1>My Experience</h1>
          <div className="container">
            <div className="card">
              <div className="box">
                <div className="percent">
                  <svg>
                    <circle cy={70} cx='70' r={70} />
                    <circle cy={70} cx='70' r={70} />
                  </svg>
                  <div>
                    <h2>90<span>%</span></h2>
                  </div>
                </div>
                  <h2 className="text-pb">HTML</h2>
              </div>
            </div>
          </div>
            <Col xs={12} md={6} xl={6}>
              <div className="s-left">
                <h2>FrontEnd Developer</h2>
                <div className="s-row">
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
                      <h3><SiDelphi className="s-logo"/>Delphi</h3>
                      <p>Experienced</p>
                    </div>
                  </div>
                </div>
              </div> 
            </Col>
            <Col xs={12} md={6} xl={6}>
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
    </>
  );
}
