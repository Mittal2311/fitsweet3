import React,{useState} from "react";
import { Container,Row,Col,Image } from "react-bootstrap";

import { Header,Footer, Banner, Quote, Process, WeOffer,Question, Cta, Experience,Testimonial } from "../components";

import OfferStyle from "../styles/_offer.module.css";
import style from "../styles/_brand.module.css";
import FaqStyle from "../styles/_faq.module.css";


import OfferJson from "../json/Offer.json";
import FaqJson from "../json/Faq.json";

import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Home() {
  const [offerData] = useState(OfferJson);
  const [faqData] = useState(FaqJson);
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 500,
    autoplay:true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
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
    <Header />
    <Banner />
    <Quote />   
    <Process />
    <div className={OfferStyle.WeOffer}>
    <Container>
    <div className={OfferStyle.WeOfferHeading }>
    <AnimationOnScroll animateIn="animate__bounceIn" animateOnce={true}> 
    <span className={OfferStyle.OfferTitle}>What we Offer</span>
    </AnimationOnScroll>
    <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}> 
    <h2 className={OfferStyle.OfferHeading}>We offer full service auto repair & maintenance</h2>
    </AnimationOnScroll>
    </div>
      <Row>
      {offerData.map((item) => (
              <WeOffer data={item} />
            ))}
            <button className={OfferStyle.LearnBtn}>Learn about services</button>
      </Row>
    </Container> 
    </div>
    <Cta />
    <Experience />
    <div className={style.BrandSection}>
    <Container>
    <h3 className={style.LogoHeading}>Brands we Serve</h3>
      <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}  className={style.SliderLogo}>
        <Slider {...settings}>
          <div>
           <Image src="/images/Logo1.svg" className={style.LogoImage }  />
          </div>
          <div>
          <Image src="/images/Logo2.svg"  className={style.LogoImage } />
          </div>
          <div>
          <Image src="/images/Logo3.svg" className={style.LogoImage }  />
          </div>
          <div>
          <Image src="/images/Logo4.svg"  className={style.LogoImage } />
          </div>
          <div>
          <Image src="/images/Logo5.svg" className={style.LogoImage }  />
          </div>
          <div>
          <Image src="/images/Logo1.svg"  className={style.LogoImage } />
          </div>  
        </Slider>
        </Col>
        <Col xl={12} lg={12} md={12} sm={12} xs={12} className={style.SliderLogo} >
        <Slider {...settings}>
          <div>
           <Image src="/images/Logo1.svg" className={style.LogoImage }  />
          </div>
          <div>
          <Image src="/images/Logo2.svg"  className={style.LogoImage } />
          </div>
          <div>
          <Image src="/images/Logo3.svg" className={style.LogoImage }  />
          </div>
          <div>
          <Image src="/images/Logo4.svg"  className={style.LogoImage } />
          </div>
          <div>
          <Image src="/images/Logo5.svg" className={style.LogoImage }  />
          </div>
          <div>
          <Image src="/images/Logo1.svg"  className={style.LogoImage } />
          </div>
        </Slider>
        </Col>
      </Row>
    </Container>
    </div>
    <Testimonial />
    <div className={FaqStyle.FaqSection}>
    <Container>
    <AnimationOnScroll animateIn="animate__bounceIn" animateOnce={true}> 
    <h3 className={FaqStyle.FaqHeading}>Frequently Asked Questions</h3>
    </AnimationOnScroll>
      <Row>
        <Col xl={6} lg={6} md={6} sm={8} xs={10} className={FaqStyle.FaqCol}>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}> 
        {faqData.map(item => <Question question={item.question} answer={item.answer} />)}
        </AnimationOnScroll>
        </Col>
      </Row>
    </Container>
    </div>
    <Footer/>
    </>
  )
}
