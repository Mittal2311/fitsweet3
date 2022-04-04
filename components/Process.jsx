import React,{useState} from "react";
import { Container,Row,Col ,Image} from "react-bootstrap";

import pstyle from "../styles/_process.module.css";

import ProcessJson from "../json/Process.json";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

export const Process = () => {
    const [processData] = useState(ProcessJson);

    return(
        <>
            <div className={pstyle.ProcessSection}>
            <Container>
                <Row>
                    <Col xl={6} lg={6} md={6} sm={12} xs={12} className={pstyle.ProcessCol}>
                    <AnimationOnScroll animateIn="animate__fadeInLeft"   animateOnce={true}>
                    <h2 className={pstyle.ProcessHeading }>We follow a clear process to help you out.</h2>
                    <p className={pstyle.ProcessContent}>Through True Rich  Attended does no end it his mother since real had half every him case in packages enquire</p>
                   <button className={pstyle.LearnBtn}>Learn more</button>
                    </AnimationOnScroll>
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                    {processData.map((item) => (
                        <>
                        <AnimationOnScroll animateIn="animate__fadeInUp"   animateOnce={true}>
                    <div className={pstyle.ProcessRight}>
                        <Image src={item.processImg} className={pstyle.NumberIcon} />
                        <div className={pstyle.Border}> </div>
                        <div className={pstyle.RightHeadings}>
                            <span className={pstyle.ProcessTitle}>{item.processHeading}</span>
                            <p className={pstyle.ProcessCont}>{item.processDescription}</p>
                        </div>
                    </div>
                   </AnimationOnScroll>
                    </>
                    ))}
                    </Col>
                </Row>
            </Container>

            </div>
        </>
    )
}