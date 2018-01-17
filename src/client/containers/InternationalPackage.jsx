import { connect } from 'react-redux';
import PricingComponent from 'components/PricingComponent/International';

const mapStateToProps = (state) => {
  return state;
};


const AppContainer = connect(mapStateToProps)(PricingComponent);

export default AppContainer;
