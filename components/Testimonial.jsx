import React,{useState} from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import style from "../styles/_testimonial.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import TestimonialJson from "../json/Testimonial.json";


export const Testimonial = () => {
    const [testData] = useState(TestimonialJson);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
      <div className={style.TestimonialSection}>
        <h3 className={style.TestimonialHeading}>
          Our customers say the nicest things about our service
        </h3>
        <Container>
          <Row className="MyRow">
            <Slider {...settings}>
            {/* <>
  {testData.map((item) => (

       ))} 

       </> */}
          
          <Col xl={6} lg={6}>
            <div className={style.TestimonialContent}>
              <div className={style.ImageHeading}>
                <Image src="images/Test1.png" className={style.TestIcon} />
                <div className={style.HeadingTitle}>
                <h6 className={style.ContentHeading}>Jonathan Vallem</h6>
                <span className={style.ContentTitle}>New york</span>
                </div>
              </div>
              <p className={style.Description}>
                I have got my car repaired at Finsweet many times before, they
                are good at what they do. Not only did they repair my car in a
                short comprehensive look on all the working
              </p>
              </div>
            </Col>
       
            <Col xl={6} lg={6}>
            <div className={style.TestimonialContent}>
              <div className={style.ImageHeading}>
                <Image src="images/Test1.png" className={style.TestIcon} />
                <div className={style.HeadingTitle}>
                <h6 className={style.ContentHeading}>Jonathan Vallem</h6>
                <span className={style.ContentTitle}>New york</span>
                </div>
              </div>
              <p className={style.Description}>
                I have got my car repaired at Finsweet many times before, they
                are good at what they do. Not only did they repair my car in a
                short comprehensive look on all the working
              </p>
              </div>
            </Col>

          <Col xl={6} lg={6}>
            <div className={style.TestimonialContent}>
              <div className={style.ImageHeading}>
                <Image src="images/Test1.png" className={style.TestIcon} />
                <div className={style.HeadingTitle}>
                <h6 className={style.ContentHeading}>Jonathan Vallem</h6>
                <span className={style.ContentTitle}>New york</span>
                </div>
              </div>
              <p className={style.Description}>
                I have got my car repaired at Finsweet many times before, they
                are good at what they do. Not only did they repair my car in a
                short comprehensive look on all the working
              </p>
              </div>
            </Col>
        </Slider>
          </Row>
        </Container>
      </div>
    </>
  );
};
