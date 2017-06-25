import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import SearchBar from './searchbar';
import WeatherList from './weatherlist';

class Feature extends Component {

    // componentWillMount() {
    //     this.props.fetchMessage();
    // }

    render() {
      const { cities } = this.props;
      console.log(cities);
      return (
            <div className="col-sm-6 col-sm-offset-3" >
              <SearchBar />
              <WeatherList cities={cities}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { cities: state.auth.cities };
}

export default connect(mapStateToProps, actions) (Feature);
