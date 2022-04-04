import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import { Footer, Header } from "../components";

import style from "../styles/_service.module.css";
import OfferStyle from "../styles/_offer.module.css";

import ServiceJson from "../json/Service.json";

const Service = () => {
  const [serviceData] = useState(ServiceJson);

  return (
    <>
      <Header />
      <div className="ServiceSection">
        <div className={style.ServiceBanner}>
          <Container>
            <Row className={style.BannerRow}>
              <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                <Image
                  src="images/ServiceBanner.png"
                  className={style.BannerImage}
                />
              </Col>
              <Col
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className={style.RightCol}
              >
                <div className={style.ServiceContent}>
                  <h1 className={style.ServiceHeading}>Our services</h1>
                  <p className={style.ServiceDescription}>
                    Through True Rich Attended does no end it his mother since
                    real had half every him case in packages enquire we up
                    ecstatic unsatiable saw Through True Rich Attended does
                  </p>
                  <button className={style.BookBtn}>Book a service</button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className={style.ServiceAuto}>
          <Container>
            <Row>
              <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                <div className={style.AutoContent}>
                  <Image src="images/Auto.png" className={style.AutoCar} />
                  <h3 className={style.AutoHeading}>Auto Diagnostics</h3>
                  <p className={style.AutoDescription}>
                    Through True Rich Attended does no end it his mother since
                    favourable real had half every him case in packages enquire
                    we up ecstatic. Through True Rich Attended does no end it
                    his mother.
                  </p>
                  <button className={style.ServiceBtn}>
                    See service details
                  </button>
                </div>
              </Col>
              <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <Row>
                {serviceData.map((item) => (
              <Col xl={6} lg={6} className="AutoRight">
                  <div className={OfferStyle.OfferContent}>
                    <Image
                      src={item.offerImg}
                      className={OfferStyle.OfferIcon}
                    />
                    <span className={OfferStyle.WeHeading}>                     
                      {item.offerTitle}
                    </span>
                  </div>
                </Col>
                ))}
              </Row>
             
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Service;
