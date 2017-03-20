import React, { Component, PropTypes } from 'react';

import SearchBar from './searchbar';
import WeatherList from './weatherlist';

class HomePage extends Component {
    render() {
        return (
            <section className="container">
                <h1>Welcome to Weather Tracker</h1>
                <SearchBar />
                <WeatherList />
            </section>
        );
    }
}

export default HomePage;