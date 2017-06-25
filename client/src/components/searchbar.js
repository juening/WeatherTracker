import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather, fetchCurrent } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {cityName: 'Boston'};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ cityName: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.cityName);
        this.props.fetchCurrent(this.state.cityName);
        this.setState({ cityName: '' });
    }

    render() {
        return (
            <div className="search-bar">
                <form onSubmit={this.onFormSubmit} className="form-group">
                    <div className="col-xs-10" style={searchBoxStyle}>
                        <input type="text"
                            value={this.state.cityName}
                            className="form-control"
                            onChange={this.onInputChange}
                            style={searchInputStyle} />
                    </div>
                    <div className="col-xs-2 text-right">
                        <button type="submit"  style={searchButtonStyle}>
                            <i className="fa fa-search" style={iconStyle} >GO</i>
                        </button>
                    </div>
                </form>
            </div>
        );
    }

}

const searchBoxStyle = {
    borderRadius: 50,
    border: "2px solid #e3bb88",
    padding: 10,
    paddingLeft: 20
};

const searchInputStyle = {
    backgroundColor: "#d89864",
    border: "none",
    width: "100%"
};

const searchButtonStyle = {
  backgroundColor: "#e3bb88",
  borderRadius: 50,
  border: "2px solid #d89864",
  cursor: "pointer",
  width: '45px',
  height: '45px',
  color: '#333'
};

const iconStyle ={
    backgroundColor: "#e3bb88",
    fontSize: 16
};


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather, fetchCurrent }, dispatch );
}

function mapStateToProps(state) {
  return {authenticated: state.auth.authenticated}
}

export default connect(null, mapDispatchToProps) (SearchBar);
