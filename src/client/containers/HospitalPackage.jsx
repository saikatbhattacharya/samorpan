import { connect } from 'react-redux';
import PricingComponent from 'components/PricingComponent/Hospital';

const mapStateToProps = (state) => {
  return state;
};


const AppContainer = connect(mapStateToProps)(PricingComponent);

export default AppContainer;
