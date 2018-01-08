import { connect } from 'react-redux';
import AboutComponent from 'components/About';

const mapStateToProps = (state) => {
  return state;
};


const AboutContainer = connect(mapStateToProps)(AboutComponent);

export default AboutContainer;
