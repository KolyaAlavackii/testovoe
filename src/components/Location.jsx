import React from 'react';

class Location extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        const id = this.props.id;
        this.props.getActiveLocation(id);
    }

    handleClicke = () => {
        const id = this.props.id;
        this.props.getActiveLocation(id);
        this.props.toggleMenu();
    }

    handleDelete(event) {
        const id = this.props.id;
        this.props.deleteLocation(id);
        event.stopPropagation();
    }

    render() {
        const { id, city, icon } = this.props.location;
        const iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";

        return (
            <div
                className='nav-item'
                onClick={this.handleClicke}
            >
                <img src={iconUrl} />
                <span>{city}</span>
                <i
                    className="material-icons delete-icon"
                    onClick={this.handleDelete}
                >
                    clear
                </i>
            </div>
        );
    }
}

Location.propTypes = {
    location: React.PropTypes.object.isRequired,
    id: React.PropTypes.string.isRequired,
    deleteLocation: React.PropTypes.func.isRequired,
    toggleMenu: React.PropTypes.func.isRequired,
    getActiveLocation: React.PropTypes.func.isRequired 
};

export default Location;