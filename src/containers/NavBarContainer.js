import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchDefaultWeather, fetchWeather, deleteLocation, toggleMenu, getActiveLocation } from '../actions';
import NavBar from '../components/NavBar';

const mapStateToProps =  state => ({
    locations: state.locations,
    open: state.toggle
});

const mapDispatchToProps = dispatch => ({
    fetchDefaultWeather: bindActionCreators(fetchDefaultWeather, dispatch),
    fetchWeather: bindActionCreators(fetchWeather, dispatch),
    deleteLocation: bindActionCreators(deleteLocation, dispatch),
    toggleMenu: bindActionCreators(toggleMenu, dispatch),
    getActiveLocation: bindActionCreators(getActiveLocation, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);