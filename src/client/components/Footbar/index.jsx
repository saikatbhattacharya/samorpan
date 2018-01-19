import React from 'react';

require('styles/footer.scss');

const Footbar = () => (
  <div className="footer">
    <div className="container">
      <a href="https://www.facebook.com/samorpan24X7/">
        <i className="fa fa-facebook fa-3x fa-fw" />
      </a>
      <a href="https://twitter.com/samorpan">
        <i className="fa fa-twitter fa-3x fa-fw" />
      </a>
    </div>
    <div className="counter" align="right">
      <a href="http://www.free-website-hit-counter.com">
        <img
          alt="counter"
          src="http://www.free-website-hit-counter.com/c.php?d=4&id=112033&s=16"
          border="0"
          title="Counter"
        />
      </a>
    </div>
  </div>
);
export default Footbar;
