import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import manas from 'images/manas.jpg';
import arnab from 'images/arnab.jpg';
import sayanjit from 'images/sayanjit.jpg';
import biswajit from 'images/biswajit.jpg';
import kalyani from 'images/kalyani.jpg';
import uma from 'images/uma.jpg';
import arun from 'images/arun.jpg';
import phGirl from 'images/placeholder-girl.png';

import Topbar from '../Topbar';
import FootBar from '../Footbar';

require('styles/aboutus.scss');

const AboutUs = () => (
  <div>
    <Topbar />
    <h4 className="demo-title">About Us</h4>
    <h6 className="aboutUs-text">
      Samorpan is a collection of youth across all walks of life. Our collective aim is
to be of support and service to our parents and all elderly people around us.
We understand that every parent wants to see their children happy and
successful. In our endeavour to be successful, often we move out to faraway
places and we cannot be physically present with our parents. No matter how
much we want them to be happy and enjoy a comfortable life, we are often
caught in the dilemma as to how to balance our corporate life with our parents
retired life. The gap is ever widening and leads to stress on both sides. This is
where SAMORAPN comes in the picture. Our objective is to bridge the gap. We
are remote control in your hands. Allow us to do what you want to do for your
parents or loved ones. You are the soul, we will be the body.
Our collective effort is to erase the concept of an old age home. We hate that.
We hate the fact that a person works the entire life, creates his own world and
just because s/he is old and unable to do certain things, he has to leave his
world and go to an old age home, where he is an alien, and then starts
readjustments in life. We want to abolish that. Be yourself, we are there with
you, in any and every walks of life. We will try to fulfil all your wishes, because
you have done that for us.
    </h6>
    <Grid className="aboutus-container">
      <h4 className="subtitle">The Team</h4>
      <hr />
      <h6 className="aboutUs-text">
      The team behind this idea.
      </h6>
      <Row className="about-row">
        <Col xs={12} md={2} className="about-img"><Image src={manas} thumbnail /></Col>
        <Col xs={12} md={2}>
          <h4 className="bio-text">In his mid thirties Manas is still a bachelor, and works in the
telecom sector. Manas lost his father at an early age and when career
opportunities came beaconing he sacrificed all because had he left base
his mother would have been all alone.
          </h4>
        </Col>
        <Col xs={12} md={2} className="about-img"><Image src={arnab} thumbnail /></Col>
        <Col xs={12} md={2}>
          <h4 className="bio-text">Arnab in his mid thirties is a banker. He stays
away from his parents with his wife and kid and goes through the same
pangs of fear and helplessness which grips all of us when we are away
and our parents are not at their prime.
          </h4>
        </Col>
        <Col xs={12} md={2} className="about-img"><Image src={sayanjit} thumbnail /></Col>
        <Col xs={12} md={2}>
          <h4 className="bio-text">Sayanjit in his late twenties is a civil engineer. He
lost his father at a tender age, and though his mother is pushing him to
take up lucrative opportunities off shore, he is still contemplating.
          </h4>
        </Col>
      </Row>
      <Row className="about-row">
        <Col xs={12} md={2} className="about-img"><Image src={biswajit} thumbnail /></Col>
        <Col xs={12} md={2}>
          <h4 className="bio-text">A software engineer by
profession, Biswajit stays away from his mother, and is busy trying to design
something which would give him updates about his mother’s medical
conditions on his cell phone.
          </h4>
        </Col>
        <Col xs={12} md={2} className="about-img"><Image src={phGirl} thumbnail /></Col>
        <Col xs={12} md={2}>
          <h4 className="bio-text">A nutritionist, Prativa in her early forties, she lives away from
her parents and the entire locality is afraid of her because of her diet
charts, which she would anyhow impose on everybody she loves.
          </h4>
        </Col>
        <Col xs={12} md={2} className="about-img"><Image src={kalyani} thumbnail /></Col>
        <Col xs={12} md={2}>
          <h4 className="bio-text">In her mid thirties Kalyani is a HR professional. She is
the glue which bonds all the others.
          </h4>
        </Col>
      </Row>
      <h4 className="subtitle">Our Mentors</h4>
      <hr />
      <h6 className="aboutUs-text">
      Our mentors, who supported us emotionally, financially, morally and without
whose blessings we might not have embarked on this journey.
      </h6>
      <Row className="about-row">
        <Col xs={12} md={2} className="about-img"><Image src={phGirl} thumbnail /></Col>
        <Col xs={12} md={2}>
          <h4 className="bio-text">A housewife, Chaya in her late fifties. A constant guiding force,
taking us through the intricacies of household chores and making us
understand where exactly we can be useful.
          </h4>
        </Col>
        <Col xs={12} md={2} className="about-img"><Image src={uma} thumbnail /></Col>
        <Col xs={12} md={2}>
          <h4 className="bio-text">A housewife, Uma in her early sixties. She has been living
without her children around for 15 years now. Our experimental guinea
pig and our recharge button.
          </h4>
        </Col>
        <Col xs={12} md={2} className="about-img"><Image src={arun} thumbnail /></Col>
        <Col xs={12} md={2}>
          <h4 className="bio-text">A retired SAIL employee, Arun, is in his mid seventies. He is
our Mr. Perfectionist. Without you, SAMORPAN would not have
happened sir. Success or failure, you have taught us to strive for the
best, and under your guidance we will definitely do so.
          </h4>
        </Col>
      </Row>
    </Grid>
    <FootBar />
  </div>
);
export default AboutUs;
