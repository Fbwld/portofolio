/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import {Container} from "react-bootstrap";
import "../css/Splash.css"
import AOS from 'aos';
import "aos/dist/aos.css"
import logo from "../assets/img/febi.png"

export function SplashScreen() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <div style={{
        backgroundColor : "#0a192f",
        height:'100vh',
    }}>
    <section className="splash" id="splash">
        <Container  data-aos="zoom-in" 
                data-aos-duration="800" 
                data-aos-easing="linear">
          <div className="logo-splash">
            <img src={logo} alt="" />
          </div>
          <div id="app" />
        </Container>    
    </section>
    </div>
  );
}
