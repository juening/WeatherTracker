import React from 'react';

function utcToLocalTime(dt) {
    let date = new Date(dt*1000);
    return date.toString();
}

const WeatherRow = ({weather}) => {
    const date = utcToLocalTime(weather.dt);
    return (
        <tr>
            <td>{ date.substring(0,3) }  </td>
            <td><img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="weather"/></td>
            <td>{ Math.round(weather.temp.day) }°F</td>
            <td>{Math.round(weather.temp.morn)}°F</td>
            <td>{Math.round(weather.temp.night)}°F</td>
            <td>{weather.humidity}%</td>
        </tr>
    );
};

export default WeatherRow;
