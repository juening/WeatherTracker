import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather, fetchCurrent } from '../actions/index'; 

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {cityName: ''};
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
                    <div className="col-xs-9" style={searchBoxStyle}>
                        <input type="text" 
                            value={this.state.cityName}
                            placeholder="Boston"
                            className="form-control"
                            onChange={this.onInputChange}
                            style={searchInputStyle} /> 
                    </div>
                    <div className="col-xs-3">
                        <button type="submit"  style={searchButtonStyle}> 
                            <i className="fa fa-search" style={iconStyle} ></i>
                        </button>
                    </div>
                </form>
            </div>
        );
    }

}

const searchBoxStyle = {
    borderRadius: 50,
    border: "2px solid #18bc9f",
    padding: 10,
    paddingLeft: 20
};

const searchInputStyle = {
    backgroundColor: "#1fcc90",
    border: "none",
    width: "100%"
};

const searchButtonStyle = {
  backgroundColor: "#18bc9f",
  borderRadius: 50,
  border: "2px solid #1fcc90",
  cursor: "pointer",
  width: '45px',
  height: '45px'
};

const iconStyle ={
    backgroundColor: "#18bc9f",
    fontSize: 16
};


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather, fetchCurrent }, dispatch );
}

export default connect(null, mapDispatchToProps) (SearchBar);