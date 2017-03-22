import React, { Component, PropTypes } from 'react';

import SearchBar from './searchbar';
import WeatherBox from './weatherbox';
import WeatherList from './weatherlist';

class HomePage extends Component {

    render() {
        return (
            <section className="container">
                <h1>Welcome to Weather Tracker</h1>
                <SearchBar />
                <div className="row">
                    <WeatherBox />
                    <WeatherList />
                </div>
            </section>
        );
    }
}

export default HomePage;