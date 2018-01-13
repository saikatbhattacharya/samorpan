import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

require('styles/mainbody.scss');

export default class ContactForm extends React.Component {
  constructor(...args) {
    super(...args);

    this.handleNameChange = this.handleNameChange.bind(null);
    this.handleEmailChange = this.handleEmailChange.bind(null);
    this.handleMobileChange = this.handleMobileChange.bind(null);
    this.handleMessageChange = this.handleMessageChange.bind(null);

    this.state = {
      name: '',
      email: '',
      mobile: '',
      message: '',
    };
  }

  getValidationState() {
    const {
      name, email, mobile, message,
    } = this.state;
    if (name.length > 0
        && email.length > 0
        && mobile.length > 0
        && message.length > 0) {
      return 'error';
    }
    return null;
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handleMobileChange(e) {
    this.setState({ mobile: e.target.value });
  }
  handleMessageChange(e) {
    this.setState({ message: e.target.value });
  }

  render() {
    return (
      <form className="contactForm">
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Send your enquiry</ControlLabel>
          <FormControl
            type="text"
            placeholder="Enter Your Name"
            onChange={this.handleNameChange}
          />
          <FormControl
            type="text"
            placeholder="Enter Email"
            onChange={this.handleEmailChange}
          />
          <FormControl
            type="text"
            placeholder="Enter Mobile Number"
            onChange={this.handleMobileChange}
          />
          <FormControl
            type="textbox"
            placeholder="Enter Message"
            onChange={this.handleMessageChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <Button className="formSubmit" bsStyle="primary">Submit</Button>
      </form>
    );
  }
}
