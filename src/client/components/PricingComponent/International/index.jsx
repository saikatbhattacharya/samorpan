import React from 'react';
import { Button } from 'react-bootstrap';
import Topbar from '../../Topbar';
import FootBar from '../../Footbar';

require('styles/pricing-hospital.scss');

const PricingComponent = () => (
  <div>
    <Topbar />
    <h4 className="demo-title">International Guest Package</h4>
    <hr />
    <h6 className="demo-subtitle">
      For our international guests, visit our country for fun and leisure.
      But if you happen to find for a
medical solution do contact us. We will be your friends in this country. With our network across the
country we will find you the right doctors, the right hospitals,
arrange for your stays, get you to see
our great country if and when time permits and make your stay as comfortable as possible.
Contact us with your problems and we will be happy to assist you.
    </h6>
    <Button className="contactusButton" href="/#contactus" bsStyle="primary">Contact Us</Button>
    <FootBar />
  </div>
);
export default PricingComponent;
