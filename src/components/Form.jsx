import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.inputValue.length > 0) {
            const city = this.state.inputValue;
            this.props.fetchWeather(city);
            this.setState({ inputValue: "" });
        }
    }

    handleChange = event => {
        this.setState({
            inputValue: event.target.value
        });
    }

    render() {
        return (
            <form>
                <input
                    className='nav-input'
                    placeholder='add city'
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />
                <button
                    className='nav-button'
                    onClick={this.handleSubmit}
                >
                    OK
                    </button>
            </form>
        );
    }
}

Form.propTypes = {
    fetchWeather: React.PropTypes.func.isRequired 
};

export default Form;