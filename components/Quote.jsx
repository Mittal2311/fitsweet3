import React,{useState} from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import style from "../styles/_quote.module.css";
import QuoteJson from "../json/Quote.json";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

export const Quote = () => {
    const [quoteData] = useState(QuoteJson);
  return (
    <>
      <div className={style.QuoteSection}>
        <Container>
          <Row>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
            <AnimationOnScroll animateIn="animate__bounceIn" duration={3}  animateOnce={true}> 
            <h2 className={style.TakingSection}>
                We are taking car servicing seriously
              </h2>
              </AnimationOnScroll> 
         {quoteData.map((item) => (
            <div className={style.QuoteDescription}>  
            <AnimationOnScroll animateIn="animate__fadeInDown"   animateOnce={true}>
                <Image src={item.quoteImg} className={style.Icons} />               
              <div className={style.FeatureContent}>
                <span className={style.QuoteTitle}>{item.quoteHeading}</span>
                <p className={style.QuoteContent}> 
               {item.quoteDescription}
                </p>
              </div>
              </AnimationOnScroll>
              </div>
            ))}
            <p className={style.QuoteLink}>Know more about us</p>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
            <AnimationOnScroll animateIn="animate__bounceIn"  animateOnce={true}> 
            <h2 className={style.ServiceHeading}>Get a quote for the car service</h2>
            </AnimationOnScroll>
           <div className={style.ServiceForm}>
           <AnimationOnScroll animateIn="animate__fadeInUp"   animateOnce={true}> 
           <input
                    type="text"
                    name="name"
                    className={style.FormInput}
                    placeholder="Enter your location"
                  />
                   <input
                    type="text"
                    name="name"
                    className={style.FormInput}
                    placeholder="Enter your location"
                  />
                   <input
                    type="text"
                    name="name"
                    className={style.FormInput}
                    placeholder="Enter your location"
                  />
                   <input
                    type="text"
                    name="name"
                    className={style.FormInput}
                    placeholder="Enter your location"
                  /> 
                  </AnimationOnScroll>
           </div>
           <button className={style.GetBtn}>Get your quote</button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
