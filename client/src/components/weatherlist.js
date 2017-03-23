import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherRow from './weatherrow';

class WeatherList extends Component {
    render() {
        return (
            <table className="col-sm-12 weather-list text-center" >
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Weather</th>
                        <th>Day</th>
                        <th>Morning</th>
                        <th>Night</th>
                        <th>Humidity</th>
                    </tr>
                </thead>

                <tbody>
                    { this.props.weatherArray.map((weather, index) => <WeatherRow weather={weather} key={index} /> ) }
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return { weatherArray: state.weather.weatherList, city: state.weather.city };
}

export default connect(mapStateToProps) (WeatherList);