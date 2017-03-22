import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCurrent, fetchWeather } from '../actions/index';

function utcToLocalTime(dt) {
    const date = new Date(dt*1000);
    return date.toString();
}

class WeatherBox extends Component {
    constructor(props) {
        super(props);
        this.state = {lat: 42.36, lon: -71.06, gps:false };
        this.fetchCurrentWeather = this.fetchCurrentWeather.bind(this);
        this.fetchFutureWeather = this.fetchFutureWeather.bind(this);
    }

    componentDidMount() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({ lon:position.coords.longitude, lat: position.coords.latitude, gps:false });
                this.fetchCurrentWeather();
                this.fetchFutureWeather();
            });
            
        }
    }

    fetchCurrentWeather() {
        this.props.fetchCurrent(this.state.lon, this.state.lat);
    }

    fetchFutureWeather() {
        this.props.fetchWeather(this.state.lon, this.state.lat);
    }

    render() {
        if(!this.props.currentWeather) {
            return <h1>Loading...</h1>;
        }
        const { currentWeather } = this.props;
        const date = utcToLocalTime(currentWeather.dt);
        
        return (
            <div className="box col-sm-6 ">
                <div className="row" >
                    <div className="col-xs-6 text-left">
                        <h5>
                            { date.substring(0,3) }                        
                        </h5>
                    </div>
                    <div className="col-xs-4 col-xs-offset-2 text-right"> 
                        <h5>
                            { date.substring(4,10) }                        
                        </h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6 col-xs-offset-3">
                        <h4>{ Math.round(currentWeather.main.temp) }°F</h4>
                        <img src={`http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`} 
                            alt={currentWeather.weather[0].description} />
                    </div>
                </div>
                <div className="row" >
                    <div className="col-xs-3 text-left">
                        
                        <span>{currentWeather.weather[0].main}</span>
                    </div> 
                    <div className="col-xs-3 col-xs-offset-6 text-right">
                        
                        <span>{`${currentWeather.main.humidity} %`}</span>
                    </div> 
                </div>
            </div>
        );
    }
}



function mapStateToProps(state) {
    return { currentWeather: state.weather.current };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchCurrent, fetchWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherBox);