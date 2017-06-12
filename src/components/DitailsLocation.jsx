import React from 'react';

class DitailsLocation extends React.Component {

    render() {
        const { city, icon, temp, country, humidity, description, isFething } = this.props.activeLocation;
        const iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";

        return (
            <div className='ditails-location'>
                {isFething ?
                    <div>Loading...</div>
                    :
                    <div>
                        <img
                            src={iconUrl}
                            alt={description}
                            className='ditails-location-icon'
                        />
                        <div className='ditails-location-city'>{`${city} ${country}`}</div>
                        <div>temp: {temp}&deg;C</div>
                        <div>humidity: {humidity}%</div>
                    </div>
                }
            </div>
        );
    }
}

DitailsLocation.propTypes = {
    activeLocation: React.PropTypes.object.isRequired 
};

export default DitailsLocation;