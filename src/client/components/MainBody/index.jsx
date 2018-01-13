import React from 'react';
import { Grid, Row, Col, Button, Image } from 'react-bootstrap';
import logo from 'images/logo.png';
// import aboutus from 'images/about-us.jpg';
// import map from 'images/map2.png';
import topPic from 'images/plce-001.jpg';
import email from 'images/email.png';
import mobile from 'images/mobile.png';
import location from 'images/location.png';
import healthCare from 'images/health-care.png';
import hospital from 'images/hospital.png';
import maid from 'images/maid.png';
import stretcher from 'images/stretcher.png';


require('styles/mainbody.scss');

const MainBody = () => (
  <Grid className="main-container">
    <Row className="show-grid home-row">
      {/* <Col xs={12} md={4}><img id="mainLogo" src={logo} alt="logo" /></Col> */}
      <Col xs={12} md={12} className="topicRightPic">
        <img id="topRightPic" src={topPic} alt="topPic" />
        <div className="headerClass">
          <img id="mainLogo" src={logo} alt="logo" />
          <h6 className="captionLine"> Crafted for Dusk of Life </h6>
        </div>
      </Col>
    </Row>
    <Row className="show-grid aboutus-row">
      <Col xs={12} md={12} className="aboutusSection">
        <h2 className="aboutUsHeader"> Our Objectives </h2>
        <hr />
        <p className="serviceText">SAMORPAN is the creation of young
        professionals across all walks of life.
        Our collective aim is to
        be of support and service to our parents and the senior citizens around us. <b />
          We understand that every parent wants to see their children happy and successful.
        In our endeavor to be professionally successful, often, we have to move out of
        home and away from our parents. Much as we want our parents to be happy and
        have a comfortable life; we have to deal with situations as to how to balance
        our corporate and professional life with our parent’s retired life.
        This gap is ever widening leading to stress on both sides.
        This is where SAMORPAN comes to your aid.
        <b />
          The primary objective of SAMPORPAN is to bridge this gap.
        We are the team that would facilitate this situation to get better.
        We would do what you want to do for your parents or loved ones.
        You are the soul, we will be the body.
        Our collective effort is to make it easy and convenient for our
        parents in the evening of their lives.
        We would like to make these senior citizens who have
        worked their entire life, built their families to now have a
        life of comfort and ease when they are no longer as physically or
        mentally agile or capable for various reasons. We would like them to continue
        to have a life of dignity in the comfort of their own abode.
        We would like to offer our services to you to make this a reality.
        </p>
        <Button className="knowMores" href="/about" bsStyle="primary">Know More</Button>
      </Col>
    </Row>
    <Row className="show-grid aboutus-row">
      <Col xs={12} md={12} className="aboutusSection">
        <h2 className="aboutUsHeader"> Services </h2>
        <hr />
      </Col>
      <Col xs={12} md={3} className="serviceBody">
        <div className="services">
          <Image src={hospital} alt="healthcare" />
          <h2> Hospital-care package</h2>
          <p>
          Caring you in hospital
          </p>
        </div>
      </Col>
      <Col xs={12} md={3} className="serviceBody">
        <div className="services">
          <Image src={stretcher} alt="healthcare" />
          <h2> Surgical-care package</h2>
          <p>
          Assisting you during a surgery - tailored as per your need
          </p>
        </div>
      </Col>
      <Col xs={12} md={3} className="serviceBody">
        <div className="services">
          <Image src={healthCare} alt="healthcare" />
          <h2> Extra-care package</h2>
          <p>
          Caring you in post-hospitalization days
          </p>
        </div>
      </Col>
      <Col xs={12} md={3} className="serviceBody">
        <div className="services">
          <Image src={maid} alt="healthcare" />
          <h2> Domestic package</h2>
          <p>
          Helping you in all your domestic needs
          </p>
        </div>
      </Col>
    </Row>
    <Row className="show-grid contacts-row">
      <Col xs={12} md={12}>
        <div className="mapText">
          <Image className="contact-icons" src={location} />
          <span className="address">
            6/1, J.N.Das Path, City Centre, Durgapur: 713216, West Bengal, India.
          </span>
          <Image className="contact-icons" src={mobile} />
          <span className="address">
            +91 9748124266,
            +91 96096 00090
          </span>
          <Image className="contact-icons" src={email} />
          <span className="address">
            contact@samorpan.com
          </span>
        </div>
      </Col>
    </Row>
  </Grid>
);

export default MainBody;
