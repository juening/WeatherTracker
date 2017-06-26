import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      inputText: 'Search Weather by City Name or Zip Code'
    };
  }

  render() {
    return (
      <div className='search-bar'>
        <form onSubmit={this.onFormSubmit} className='form-group'>
          <div style={searchBoxStyle} className='col-xs-10' >
            <input type='text' onChange={this.onChange} value={this.state.inputText}
              onFocus={ ()=>{ return this.setState({ inputText:'' })} } style={searchInputStyle} />
          </div>
          <div className='col-xs-2 text-right'>
            <button type='submit' style={searchButtonStyle}>GO</button>
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

export default SearchForm;
