import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DitailsLocation from '../components/DitailsLocation';

const mapStateToProps =  state => ({
    activeLocation: state.activeLocation
});

  
export default connect(mapStateToProps)(DitailsLocation);