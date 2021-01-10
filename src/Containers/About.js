import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import "../css/Containers/About.css";

export function About() {
  return (
    <div id="about" name="about" className="about">
      <Fade>
        <div>
          <h1 style={{ paddingTop: "10vw" }}>About Me</h1>
          <Row
            style={{ paddingTop: "3vw" }}
            className="d-flex justify-content-center"
          >
            <Col lg={6}>
              <div style={{ paddingLeft: "6vw" }}>
                <div className="p-4 bio">
                  <p>
                    Hi, I'm {" "}<strong>Arjun Dev PK</strong>, a 3<sup>rd</sup> year {" "}
                    <strong>Computer Engineering Undergrad</strong> from {" "}
                    Amrita University ,Coimbatore.
                  </p>
                  <p>
                    I enjoy developing & engineering{" "}
                    <strong>
                      efficient full stack applications
                    </strong>
                    , and always try to optimize the user experience for a
                    simple and elegant user journey through the application. I
                    have a strong <strong>passion for coding</strong> and have
                    done various projects and courses. I'm
                    an <strong>avid competitive coder</strong>, have participated
                    in various contests across different platforms!
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="picture">
                <Image src={require("../img/me.jpg")} className="bio-img" width="350" height="350"/>
              </div>
            </Col>
          </Row>
        </div>
      </Fade>
    </div>
  );
}

export default About;
