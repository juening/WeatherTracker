import React, { Component, PropTypes } from 'react';

import SearchBar from './searchbar';
import WeatherBox from './weatherbox';
import WeatherList from './weatherlist';

class HomePage extends Component {

    render() {
        return (
            <section className="col-sm-6 col-sm-offset-3" style={appStyle}>
                
                
                <div className="row">
                    <SearchBar />
                    <WeatherBox />
                    <WeatherList />
                </div>
            </section>
        );
    }
}

const appStyle = {
    backgroundColor: "#18bc9c",
    color:"#ffffff"
};

export default HomePage;