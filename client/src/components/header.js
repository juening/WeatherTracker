import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
    renderLinks() {
        if(this.props.authenticated) {
            return (
                <li className="nav-item">
                    <Link className="nav-link" to="/signout" >Sign Out</Link>
                </li>
            );
        } else {
            return [
                <li className="nav-item" key={1}>
                    <Link className="nav-link" to="/signin">Sign In</Link>
                </li>,
                <li className="nav-item" key={2}>
                    <Link className="nav-link" to="/signup">Sign Up</Link>
                </li>
            ];
        }
    }
    render() {
        return (
            <nav className="navbar navbar-light col-sm-6 col-sm-offset-3" style={appStyle} >
                <Link to="/" className="navbar-brand">Weather Tracker</Link>
                <ul className="nav navbar-nav">
                    {this.renderLinks()}
                </ul>
            </nav>
        );
    }
}

const appStyle = {
    backgroundColor: "#2C3E55"
};

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);