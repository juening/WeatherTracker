import React, { Component, PropTypes } from 'react';

import SearchBar from './searchbar';
import WeatherBox from './weatherbox';
import WeatherList from './weatherlist';

class HomePage extends Component {

    render() {
        return (
            <section className="col-sm-6 col-sm-offset-3" >   
                <div className="row">
                    <SearchBar />
                    <WeatherBox />
                    <WeatherList />
                </div>
            </section>
        );
    }
}

const imageUrl = 'https://d13yacurqjgara.cloudfront.net/users/780072/screenshots/2227157/attachments/414102/Blood.png';


export default HomePage;