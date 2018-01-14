import React from 'react';
import Topbar from '../../Topbar';
import FootBar from '../../Footbar';

require('styles/pricing-hospital.scss');

const PricingComponent = () => (
  <div>
    <Topbar />
    <h4 className="demo-title">Extra-Care Package</h4>
    <hr />
    <h6 className="demo-subtitle">
      It is often observed that post hospitalization a person needs some extra care and attention.
      To address this issue,
      we tried to tailor make our package in a way which can take care of the situation.
    </h6>
    <div className="pricing-table">
      <div className="pricing-option">
        <h4>Package Details</h4>
        <hr />
        <p>24 hour attendant( male to male, female to female)
        </p>
        <p>Twice weekly nutritionist advice.</p>
        <p>Maintaining hourly blood pressure and body temperature chart.</p>
        <p>Daily monitoring of blood sugar
        </p>
        <p>Two doctor visit
          (Transportation: Home to hospital to and fro for maximum 4 members including patient)
        </p>
        <p>Insurance claims assistance
        </p>
        <p>Banking assistance</p>
        <p>Hourly co-ordination with family members
           (Any two family members will receive hourly updates from us)
        </p>
        <p>Any time video calling assistance with near and dear ones</p>
        <p>Masseur, twice everyday for 15 minutes.
          ( Light body massage to take care of your aches)
        </p>
        <p>Doctors follow up.( Where patient does not need to go,
          we will represent the doctors in the follow-up visits with test reports and all)
        </p>
        <p>Cook for the whole family ( Upto 4 members)</p>
        <p>Maid for the whole family ( Upto 4 members)</p>
        <p>Grocery shopping assistance every day</p>
        <p>24 x 7 emergency support</p>
        <hr />
        <h6>* This is a general scheme. Talk to us. We will create a package as per your
needs.
        </h6>
        <div className="price">
          <div className="front">
            <span className="price">
              10000 <b>/week</b>
            </span>
          </div>
          <div className="back">
            <a href="/#contactus" className="button">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
    <FootBar />
  </div>
);
export default PricingComponent;
