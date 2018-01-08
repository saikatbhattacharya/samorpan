import React from 'react';
import { Grid, Row, Col, Button, Image } from 'react-bootstrap';
import logo from 'images/logo.png';
import aboutus from 'images/about-us.jpg';
import map from 'images/map2.png';
import topPic from 'images/plce-001.jpg';
import email from 'images/email.png';
import mobile from 'images/mobile.png';
import location from 'images/location.png';
import quote from 'images/quote-button.png';
// import checked from 'images/checked.png';


require('styles/mainbody.scss');

const MainBody = () => (
  <Grid className="main-container">
    <Row className="show-grid home-row">
      <Col xs={12} md={4}><img id="mainLogo" src={logo} alt="logo" /></Col>
      <Col xs={12} md={8} className="topicRightPic">
        <div className="rightText">
          <Image className="contact-icons" src={quote} />
          <span className="address">
            No one is useless in this world who lightens the burdens of another.
          </span>
          <span className="charles-dickens"> - Charles Dickens </span>
        </div>
        <img id="topRightPic" src={topPic} alt="topPic" />
      </Col>
    </Row>
    <Row className="show-grid aboutus-row">
      <Col xs={12} md={8}><img id="topRightPic" src={aboutus} alt="topPic" /></Col>
      <Col xs={12} md={4}>
        <h2 className="aboutUsHeader">About Us</h2>
        <p className="aboutUs">We understand that every parent wants to see their children happy and
            successful. In our endeavour to be successful, often we move out to faraway
            places and we cannot be physically present with our parents. No matter how
            much we want them to be happy and enjoy a comfortable life, we are often
            caught in the dilemma as to how to balance our corporate life with our parents
            retired life. The gap is ever widening and leads to stress on both sides. This is
            where SAMORAPN comes in the picture. Our objective is to bridge the gap. We
            are remote control in your hands. Allow us to do what you want to do for your
            parents or loved ones. You are the soul, we will be the body.
        </p>
        <Button href="/about" bsStyle="primary">Know More</Button>
      </Col>
    </Row>
    <Row className="show-grid contacts-row">
      <Col xs={12} md={4}>
        <h2 className="aboutUsHeader">Our Services</h2>
        <div className="aboutUs">
          <span className="service-brief-text-1">
            We have tailored the right service for you what will help you to live your life fullest.
          We are here to take care of everything in your household -
          we provide you the right company in your lonliness.
          </span>
          <br />
          <ol className="rounded-list">
            <li><a href="/packages">Maid</a></li>
            <li><a href="/packages">Cook</a></li>
            <li><a href="/packages">Driver</a></li>
            <li><a href="/packages">Security Guard</a></li>
            <li><a href="/packages">Nurse</a></li>
            <li><a href="/packages">Banking</a></li>
            <li><a href="/packages">Bill Payment</a></li>
            <li><a href="/packages">Online Call Help</a></li>
          </ol>
          <p className="many-more">... and may more.</p>
        </div>
        <Button href="/packages" bsStyle="primary">Know More</Button>
      </Col>
      <Col xs={12} md={8}>
        <div className="mapText">
          <Image className="contact-icons" src={location} />
          <span className="address">
            6/1, J.N.Das Path, City Centre, Durgapur: 713216, West Bengal, India.
          </span>
          <Image className="contact-icons" src={mobile} />
          <span className="address">
            +91 9748124266<br />
            +91 96096 00090
          </span>
          <Image className="contact-icons" src={email} />
          <span className="address">
            contact@samorpan.com
          </span>
        </div>
        <img id="topRightPic" src={map} alt="topPic" />
      </Col>
    </Row>
  </Grid>
);

export default MainBody;
