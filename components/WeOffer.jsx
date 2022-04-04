import React,{useState} from "react";
import { Col ,Image} from "react-bootstrap";
import OfferStyle from "../styles/_offer.module.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

export const WeOffer = (props) => {
    const {offerImg,offerTitle} = props.data;

    return(
        <>
        <Col xl={3} lg={3} md={6} sm={6} xs={12}   className={OfferStyle.OfferCol}>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}> 
        <div className={OfferStyle.OfferContent}>
            <Image src={offerImg} className={OfferStyle.OfferIcon} />
            <span className={OfferStyle.WeHeading}> {offerTitle}</span>
        </div>
        </AnimationOnScroll>
        </Col>
        </>
    )
}