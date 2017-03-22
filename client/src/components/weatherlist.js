import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherRow from './weatherrow';

class WeatherList extends Component {
    render() {
        return (
            <table className="col-sm-6" >
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Weather</th>
                        <th>Temp Day</th>
                        <th>Temp Morn</th>
                        <th>Temp Night</th>
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