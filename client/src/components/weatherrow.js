import React from 'react';


const WeatherRow = ({weather}) => {
    const date = utcToLocalTime(weather.dt);
    console.log(weather);
    return (
        <tr>
            <td>{ date.substring(0,3) }  </td>
            {/*<td><img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="weather"/></td>*/}
            <td><i className={iconTranform(weather.weather[0].icon, weather.weather[0].id)} ></i></td>
            <td>{ Math.round(weather.temp.day) }°F</td>
            <td>{Math.round(weather.temp.morn)}°F</td>
            <td>{Math.round(weather.temp.night)}°F</td>
            <td>{weather.humidity}%</td>
        </tr>
    );
};

function utcToLocalTime(dt) {
    let date = new Date(dt*1000);
    return date.toString();
}

function iconTranform(iconID, weatherID) {
    let iconClass="wi ";
    if(iconID.substring(2,3) === "n"){
        if(weatherID >= 200 && weatherID <= 232 ){
        iconClass+= "wi-night-thunderstorm"
        } else if(weatherID >= 300 && weatherID <= 501 ){
        iconClass+= "wi-night-alt-rain-mix"
        } else if(weatherID >= 502 && weatherID <= 504 ){
        iconClass+= "wi-night-alt-rain"
        } else if(weatherID == 511){
        iconClass+= "wi-night-alt-sleet"
        } else if(weatherID >= 520 && weatherID <= 531 ){
        iconClass+= "wi-night-alt-rain"
        } else if(weatherID >= 600 && weatherID <= 602 ){
        iconClass+= "wi-night-alt-snow"
        } else if(weatherID >= 611 && weatherID <= 612 ){
        iconClass+= "wi-night-alt-sleet"
        } else if(weatherID >= 615 && weatherID <= 622 ){
        iconClass+= "wi-night-alt-snow"
        } else if(weatherID == 701){
        iconClass+= "wi-fog"
        } else if(weatherID == 711){
        iconClass+= "wi-smoke"
        } else if(weatherID == 721){
        iconClass+= "wi-day-haze"
        } else if(weatherID == 731 || weatherID == 761){
        iconClass+= "wi-dust"
        } else if(weatherID == 741){
        iconClass+= "wi-night-fog"
        } else if(weatherID == 751){
        iconClass+= "wi-sandstorm"
        } else if(weatherID == 762){
        iconClass+= "wi-volcano"
        } else if(weatherID == 771){
        iconClass+= "wi-night-alt-cloudy-windy"
        } else if(weatherID == 781){
        iconClass+= "wi-tornado"
        } else if(weatherID == 800){
        iconClass+= "wi-night-clear"
        } else if(weatherID >= 800 && weatherID <= 802){
        iconClass+= "wi-cloud"
        } else if(weatherID >= 803 && weatherID <= 804){
        iconClass+= "wi-cloudy"
        } else if(weatherID == 900){
        iconClass+= "wi-tornado"
        } else if(weatherID >= 901 && weatherID <= 902){
        iconClass+= "wi-hurricane"
        } else if(weatherID == 903){
        iconClass+= "wi-snowflake-cold"
        } else if(weatherID == 904){
        iconClass+= "wi-hot"
        } else if(weatherID == 905){
        iconClass+= "wi-windy"
        } else if(weatherID == 906){
        iconClass+= "wi-hail"
        } else if(weatherID >= 951 && weatherID <= 955){
        iconClass+= "wi-night-alt-cloudy-windy"
        } else if(weatherID >= 956 && weatherID <= 961){
        iconClass+= "wi-night-alt-cloudy-gusts"
        } else if(weatherID == 962){
        iconClass+= "wi-hurricane"
        }
    } else if(iconID.substring(2,3) === "d"){
        if(weatherID >= 200 && weatherID <= 232 ){
        iconClass+= "wi-day-thunderstorm"
        } else if(weatherID >= 300 && weatherID <= 501 ){
        iconClass+= "wi-day-rain-mix"
        } else if(weatherID >= 502 && weatherID <= 504 ){
        iconClass+= "wi-day-rain"
        } else if(weatherID == 511){
        iconClass+= "wi-day-sleet"
        } else if(weatherID >= 520 && weatherID <= 531 ){
        iconClass+= "wi-day-rain"
        } else if(weatherID >= 600 && weatherID <= 602 ){
        iconClass+= "wi-day-snow"
        } else if(weatherID >= 611 && weatherID <= 612 ){
        iconClass+= "wi-day-sleet"
        } else if(weatherID >= 615 && weatherID <= 622 ){
        iconClass+= "wi-day-snow"
        } else if(weatherID == 701){
        iconClass+= "wi-fog"
        } else if(weatherID == 711){
        iconClass+= "wi-smoke"
        } else if(weatherID == 721){
        iconClass+= "wi-day-haze"
        } else if(weatherID == 731 || weatherID == 761){
        iconClass+= "wi-dust"
        } else if(weatherID == 741){
        iconClass+= "wi-day-fog"
        } else if(weatherID == 751){
        iconClass+= "wi-sandstorm"
        } else if(weatherID == 762){
        iconClass+= "wi-volcano"
        } else if(weatherID == 771){
        iconClass+= "wi-day-windy"
        } else if(weatherID == 781){
        iconClass+= "wi-tornado"
        } else if(weatherID == 800){
        iconClass+= "wi-day-sunny"
        } else if(weatherID >= 800 && weatherID <= 802){
        iconClass+= "wi-cloud"
        } else if(weatherID >= 803 && weatherID <= 804){
        iconClass+= "wi-cloudy"
        } else if(weatherID == 900){
        iconClass+= "wi-tornado"
        } else if(weatherID >= 901 && weatherID <= 902){
        iconClass+= "wi-hurricane"
        } else if(weatherID == 903){
        iconClass+= "wi-snowflake-cold"
        } else if(weatherID == 904){
        iconClass+= "wi-hot"
        } else if(weatherID == 905){
        iconClass+= "wi-windy"
        } else if(weatherID == 906){
        iconClass+= "wi-hail"
        } else if(weatherID >= 951 && weatherID <= 955){
        iconClass+= "wi-day-light-wind"
        } else if(weatherID >= 956 && weatherID <= 961){
        iconClass+= "wi-day-cloudy-gusts"
        } else if(weatherID == 962){
        iconClass+= "wi-hurricane"
        }
    }
    return (iconClass);
};



export default WeatherRow;
