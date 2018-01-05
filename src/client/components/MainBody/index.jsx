import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import logo from 'images/logo.png';
import map from 'images/map.png';
import topPic from 'images/plce-001.jpg';

require('styles/mainbody.scss');

const MainBody = () => (
  <Grid className="main-container">
    <Row className="show-grid home-row">
      <Col xs={12} md={4}><img id="mainLogo" src={logo} alt="logo" /></Col>
      <Col xs={12} md={8}><img id="topRightPic" src={topPic} alt="topPic" /></Col>
    </Row>
    <Row className="show-grid aboutus-row">
      <Col xs={12} md={8}><img id="topRightPic" src={topPic} alt="topPic" /></Col>
      <Col xs={12} md={4}>
        <hr />
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
        <Button bsStyle="primary">Know More</Button>
      </Col>
    </Row>
    <Row className="show-grid contacts-row">
      <Col xs={12} md={4}>Contacts</Col>
      <Col xs={12} md={8}><img id="topRightPic" src={map} alt="topPic" /></Col>
    </Row>
  </Grid>
);

export default MainBody;
