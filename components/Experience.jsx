import React from "react";
import { Container,Row,Col } from "react-bootstrap";

import ExpStyle from "../styles/_exp.module.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

export const Experience = () => {
    return(
        <>
        <div className={ExpStyle.ExperienceSection}>
        <Container>
            <Row>
                <Col xl={3} lg={3} md={3} sm={6} xs={12} className={ExpStyle.ExpCol}>
                <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}> 
                    <h2 className={ExpStyle.CtaNumber}>20+</h2>
                    <span className={ExpStyle.CtaTitle}>Proffesional</span>
                    </AnimationOnScroll>
                </Col>
                <Col xl={3} lg={3} md={3} sm={6} xs={12} className={ExpStyle.ExpCol}>
                <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}> 
                    <h2 className={ExpStyle.CtaNumber}>10+</h2>
                    <span className={ExpStyle.CtaTitle}> Years Eperience</span>
                    </AnimationOnScroll>
                </Col>
                <Col xl={3} lg={3} md={3} sm={6} xs={12} className={ExpStyle.ExpCol}>
                <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}> 
                    <h2 className={ExpStyle.CtaNumber}>12K+</h2>
                    <span className={ExpStyle.CtaTitle}>Service Closed</span>
                    </AnimationOnScroll>
                </Col>
                <Col xl={3} lg={3} md={3} sm={6} xs={12} className={ExpStyle.ExpCol}>
                <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}> 
                    <h2 className={ExpStyle.CtaNumber}>100%</h2>
                    <span className={ExpStyle.CtaTitle}>Customer Satisfaction</span>
                    </AnimationOnScroll>
                </Col>
            </Row>
        </Container>
        </div>
        </>
    )
}