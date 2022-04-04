import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import CtaStyle from "../styles/_cta.module.css";

export const Cta = () => {
  return (
    <>
      <div className={CtaStyle.CtaSection}>
        <div className={CtaStyle.CtaImages}>
        <Col xl={8} lg={8} md={8} sm={8} xs={12} >
          <Image src="images/Car.png" className={CtaStyle.CarImage} />
        </Col>
        <Col xl={4} lg={4} md={4} sm={4} xs={12} >
        <Image src="images/Wire.png" className={CtaStyle.CtaImg} />
        </Col>
        </div>
        <Container>
          <Row>
            <Col xl={6} lg={6} className="CtaCol">
              <div className={CtaStyle.CtaContent}>
                <h3 className={CtaStyle.CtaHeading}>
                  Get in touch with us for your service related query
                </h3>
                <button className={CtaStyle.ContactBtn}>Contact Us</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
