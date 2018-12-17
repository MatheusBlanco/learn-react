import React, { Component } from 'react';
import App from './App';

class Header extends Component {
    render() {
        return (
            <div className="App-header">
                <h2>{this.props.text}</h2>
            </div>
        );
    }
}

export default Header;