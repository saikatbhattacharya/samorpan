import React from 'react';

require('styles/pricing.scss');

const PricingComponent = () => (
  <div>
    <h4 className="demo-title">Subscriptions</h4>

    <div className="pricing-table">
      <div className="pricing-option">
        <h4>Pacakge 1</h4>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          harum voluptatum, sit cum voluptatibus inventore quae qui provident
          eveniet dicta at, quibusdam ipsam iusto reprehenderit hic saepe
          nesciunt sed illo.
        </p>
        <hr />
        <div className="price">
          <div className="front">
            <span className="price">
              199 <b>$</b>
            </span>
          </div>
          <div className="back">
            <a href="abc.com" className="button">
              Buy now
            </a>
          </div>
        </div>
      </div>

      <div className="pricing-option">
        <h4>Pacakge 2</h4>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          harum voluptatum, sit cum voluptatibus inventore quae qui provident
          eveniet dicta at, quibusdam ipsam iusto reprehenderit hic saepe
          nesciunt sed illo.
        </p>
        <hr />
        <div className="price">
          <div className="front">
            <span className="price">
              399 <b>$</b>
            </span>
          </div>
          <div className="back">
            <a href="abc.com" className="button">
              Buy now
            </a>
          </div>
        </div>
      </div>

      <div className="pricing-option">
        <h4>Pacakge 3</h4>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          harum voluptatum, sit cum voluptatibus inventore quae qui provident
          eveniet dicta at, quibusdam ipsam iusto reprehenderit hic saepe
          nesciunt sed illo.
        </p>
        <hr />
        <div className="price">
          <div className="front">
            <span className="price">
              999 <b>$</b>
            </span>
          </div>
          <div className="back">
            <a href="abc.com" className="button">
              Buy now
            </a>
          </div>
        </div>
      </div>

      <div className="pricing-option">
        <h4>Pacakge 4</h4>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          harum voluptatum, sit cum voluptatibus inventore quae qui provident
          eveniet dicta at, quibusdam ipsam iusto reprehenderit hic saepe
          nesciunt sed illo.
        </p>
        <hr />
        <div className="price">
          <div className="front">
            <span className="price">
              999 <b>$</b>
            </span>
          </div>
          <div className="back">
            <a href="abc.com" className="button">
              Buy now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default PricingComponent;
