import React from 'react';
import Topbar from '../../Topbar';
import FootBar from '../../Footbar';

require('styles/pricing-hospital.scss');

const PricingComponent = () => (
  <div>
    <Topbar />
    <h4 className="demo-title">Hospital Care Package</h4>
    <hr />
    <h6 className="demo-subtitle">
      A lot of paraphernalia is involved when our loved ones is hospitalized. This is our
attempt to reduce your hospital related stress and focus on taking care of your loved
ones without being worked up yourself.
    </h6>
    <div className="pricing-table-1">
      <div className="pricing-option">
        <h4>Package Details</h4>
        <hr />
        <p>24 x 7 Patient party representative in hospital. ( We will stay in hospital on your
behalf and keep track, you rest, in case of any unfortunate eventualities we will
co-ordinate with you).
        </p>
        <p>All insurance related issues will be taken care of us.</p>
        <p>All the co-ordination in the hospital will be taken care of us.</p>
        <p>We will keep you updated.( Every 30 mins detailed update to any two family
members).
        </p>
        <p>Most hospital provides food and attendant to the patient. In case it is not
provided, we will provide the attendant and get the food.
        </p>
        <p>Transportation: to and from hospital of patient parties upto four members. Twice
in a day ( maximum of 15 km distance).
        </p>
        <hr />
        <h6>* This is a general scheme. Talk to us. We will create a package as per your
needs.
        </h6>
        <div className="price">
          <div className="front">
            <span className="price">
              <p>Without food and Attendant:</p> 1500 <b>/day</b>
            </span>
            <span className="price">
              <p>With food and Attendant:</p> 2000 <b>/day</b>
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
