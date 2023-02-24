/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/order */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/civil.jpeg";
import "../css/ProjectCard.css";
import AOS from 'aos';
import "aos/dist/aos.css"

export function Project() {

  const projects = [
    {
      title: "Dumbmerch",
      description: "This website is used for buying and selling all kinds of products.",
      imgUrl: projImg1,
      urlgithub:"https://github.com/Fbwld/DumbMerch-BE-B34.git",
      urlLink:"https://dumbmerch-by-febi.netlify.app/"
    },
    {
      title: "Waysbeans",
      description: "A coffeeshop website that sells various types of coffee. In this application, we can make purchases and learn about coffee descriptions.",
      imgUrl: projImg2,
      urlgithub:"https://github.com/Fbwld/WAYSBEANS-BE.git",
      urlLink:"https://waysbeans-by-febi.netlify.app/"
    },
  ];
  const android = [
    {
      title: "Calculator and Todo List",
      description: "A calculator and to-do list application used to organize daily activities.",
      imgUrl: projImg3,
      urlgithub:"https://github.com/Fbwld/calculator-todolist.git",
      urlLink:""
    },
    {
      title: "Civil Calculator",
      description: "A calculator application in civil engineering that can simplify calculations for concrete and roof components of a building",
      imgUrl: projImg3,
      urlgithub:"https://github.com/CivilCalculator/CivilCalculator.git",
      urlLink:""
    },
  ];
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 
                data-aos="fade-up" 
                data-aos-duration="1000" 
                data-aos-easing="linear"
                style={{
                    marginBottom:'60px'
                }}
                >
                  My Projects
                 </h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear" variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Android</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row data-aos="fade-right" data-aos-duration="2000">
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row data-aos="fade-right" data-aos-duration="2000">
                        {
                          android.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" />
    </section>
  )
}