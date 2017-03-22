import React, { Component, PropTypes } from 'react';

import SearchBar from './searchbar';
import WeatherBox from './weatherbox';
import WeatherList from './weatherlist';

class HomePage extends Component {

    render() {
        return (
            <section className="col-sm-6 col-sm-offset-3">
                
                
                <div className="row">
                    <SearchBar />
                    <WeatherBox />
                    <WeatherList />
                </div>
            </section>
        );
    }
}

export default HomePage;