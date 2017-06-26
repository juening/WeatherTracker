import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import SearchForm from './searchform';
import WeatherList from './weatherlist';

class Feature extends Component {

    // componentWillMount() {
    //     this.props.fetchMessage();
    // }

    render() {
      const { cities } = this.props;
      console.log(cities);
      return (
          <section className='col-sm-6 col-sm-offset-3'>
            <div className='row'>
              <SearchForm />
              <WeatherList cities={cities}/>
            </div>
          </section>
        );
    }
}

function mapStateToProps(state) {
    return { cities: state.auth.cities };
}

export default connect(mapStateToProps, actions) (Feature);
