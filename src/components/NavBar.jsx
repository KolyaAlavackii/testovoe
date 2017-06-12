import React from 'react';

import Form from './Form';
import Location from './Location';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDefaultWeather();
    }

    handleToggle = () => {
        this.props.toggleMenu();
    }

    render() {
        const locations = this.props.locations;

        return (
            <div className='nav-bar'>
                <i
                    className="material-icons nav-bar-icon"
                    onClick={this.handleToggle}
                >
                    list
                </i>
                <div className={this.props.open ? 'nav' : 'hiden-nav'}>
                    <Form fetchWeather={this.props.fetchWeather} />
                    {locations.map(location =>
                        <Location
                            location={location}
                            key={location.id}
                            id={location.id}
                            deleteLocation={this.props.deleteLocation}
                            toggleMenu={this.props.toggleMenu}
                            getActiveLocation={this.props.getActiveLocation}
                        />
                    )}
                </div>
            </div>
        );

    }
}

NavBar.propTypes = {
    locations: React.PropTypes.array.isRequired,
    open: React.PropTypes.bool.isRequired,
    deleteLocation: React.PropTypes.func.isRequired,
    toggleMenu: React.PropTypes.func.isRequired,
    getActiveLocation: React.PropTypes.func.isRequired,
    fetchDefaultWeather: React.PropTypes.func.isRequired,
    fetchWeather: React.PropTypes.func.isRequired
}

export default NavBar;