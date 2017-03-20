import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherBox from './weatherbox';

class WeatherList extends Component {
    render() {
        return (
            <div className="row" >
                <WeatherBox />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { weather: state.weather };
}

export default connect(mapStateToProps) (WeatherList);