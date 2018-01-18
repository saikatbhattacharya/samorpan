import React from 'react';
import Topbar from '../../Topbar';
import FootBar from '../../Footbar';
import Button from '../../Utils/Button';

require('styles/pricing-hospital.scss');

const PricingComponent = () => (
  <div>
    <Topbar />
    <div className="hospital-body">
      <h4 className="demo-title">Surgical Care Package</h4>
      <hr />
      <h6 className="demo-subtitle">
        With age comes the need to go under the knife.
  We care for you.
  We understand every surgery is different and every patient requires
  a special treatment. Talk to us before your surgery and we will assist
  you with everything you need and you want to know.
  Special assistance packages will be created according to patient and family of patients.
  We cannot generalize on this, but we are there for you. Talk to us,
  that is always free and we will take care of the rest.
      </h6>
      <Button
        className="contactusButton"
        link="/#contactus"
        label="Contact Us"
      />
    </div>
    <FootBar />
  </div>
);
export default PricingComponent;
