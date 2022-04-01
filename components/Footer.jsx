import React from "react";
import { Container, Row, Col,NavLink,Image } from "react-bootstrap";

import style from "../styles/_footer.module.css";


export const Footer = () => {
  return (
    <>
      <div className={style.FooterSection}>
        <Container>
          <Row>
            <Col xl={6} lg={6} md={6} sm={12} xs={12} >
              <h3 className={style.FooterHeading }>Get in touch with us for your service</h3>
              <div className={style.social_icon}>
                <NavLink  xl={3} lg={3} md={3} sm={3} ><img src="images/Facebook.png" className="fb" /></NavLink>
                <NavLink  xl={3} lg={3} md={3} sm={3}><img src="images/Insta.png"/></NavLink>
                <NavLink  xl={3} lg={3} md={3} sm={3}><img src="images/Twitter.png"/></NavLink>
                <NavLink  xl={3} lg={3} md={3} sm={3}><img src="images/Linked.png"/></NavLink>
          </div>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className="Help">
                <span className={style.FooterTitle}>Help line Noumber</span>
                <p className={style.FooterContent}>1800 265 24 52</p>
              </div>
              <div className="Address">
                <span className={style.FooterTitle}>Address</span>
                <p className={style.FooterContent}>NH 234 Public Square San Francisco 65368</p>
              </div>
              <div className="Open">
                <span className={style.FooterTitle}>We are open</span>
                <p className={style.FooterContent}>Monday to Friday 9:00 AM to  10:00  AM</p>
              </div>
            </Col>
          </Row>
        </Container>        
      </div>
      <div className={style.FooterBottom}>
      <Container>
          <Row>
              <Col xl={3} lg={3} md={3} sm={12} xs={12} >
              <Image src="images/FooterLogo.png"  />
              </Col>
              <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className={style.FooterLink}>
                <NavLink className={style.NavLink}>Home</NavLink>
                <NavLink className={style.NavLink}>About us</NavLink>
                <NavLink className={style.NavLink}>Services</NavLink>
                <NavLink className={style.NavLink}>Blog</NavLink>
                <NavLink className={style.NavLink}>Contact us</NavLink>
                </div>
              </Col>
              <Col xl={3} lg={3} md={3} sm={12} xs={12}>
              <p className={style.CopyLink}>@ Copyright Finsweet 2021</p>
              </Col>
          </Row>
      </Container>

      </div>
    </>
  );
};
