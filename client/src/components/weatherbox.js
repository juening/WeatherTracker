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
        } else {
            alert("Geolocation was not allowed or enabled, try searching the city instead.");
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
            return <h1></h1>;
        }
        const { currentWeather } = this.props;
        const date = utcToLocalTime(currentWeather.dt);
        console.log('city', this.props.currentWeather);
        return (
            <div className="box col-xs-12">
                <div className="row panel-top" >
                    <div className="col-xs-8 text-left">
                        {this.props.currentWeather.name}
                    </div> 
                    <div className="col-xs-4 text-right">
                        
                            { date.substring(0,3) }  | { date.substring(4,10) }                 
                    </div>

                </div>
                <div className="row panel-center text-center">
                    <div className="col-xs-6 col-sm-offset-3">
                        <p className="box-temp">
                            <img src={`http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`} 
                            alt={currentWeather.weather[0].main} width={100} height={100} />
                           
                            { Math.round(currentWeather.main.temp) }°F 
                        </p>
                       
                    </div>
                </div>
                <div className="row panel-bottom" >
                    <div className="col-xs-8 text-left">
                        
                        {currentWeather.weather[0].description}
                    </div> 
                    <div className="col-xs-4 text-right">
                        
                        Humidity: {`${currentWeather.main.humidity} %`}
                    </div> 
                </div>
            </div>
        );
    }
}



function mapStateToProps(state) {
    return { currentWeather: state.weather.current, city: state.weather.city };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchCurrent, fetchWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherBox);