import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";

import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

import style from "../styles/_banner.module.css";

export const Banner = () => {
  return (
    <>
      {/* <h1>Banner</h1> */}
      <div className={style.BannerSection}>
        <Container>
          <Row>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
            <AnimationOnScroll animateIn="animate__fadeInDown" duration={3}  animateOnce={true}> 
              <div className={style.BannerContent}>
                <h1 className={style.BannerHeading}>
                  Get your vehicle service done online at one place
                </h1>
                <button className={style.ServiceBtn}>Book a service</button>
                {/* <Image src="images/Time.png" className={style.TimeIcon} /> */}
                <div className={style.Open}>
                  <span className={style.OpenHeading}>We are open </span>
                  <p className={style.OpenTime}>
                    Monday to Friday 9:00 AM to 10:00 AM
                  </p>
                </div>
              </div>
              </AnimationOnScroll>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12} className={style.MainCol}>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}> 
              <Image src="images/BannerImg.png" className={style.BannerImage} />
              <div className={style.Service}>
                <Image src="images/Circle24.png" className={style.CircleImg} />
                <span className="ServiceHeading">Quick service</span>
              </div>
              <div className={style.Rating}>
                <span className={style.RatingNumber}>4.5/5</span>
                <span className={style.RatingTitle}>Rating</span>
                <div className="RatingImg">
                  <Image src="images/Stars.png" className="StarImg" />
                </div>
              </div>
              </AnimationOnScroll>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
