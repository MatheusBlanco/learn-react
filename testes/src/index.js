import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';
import Form from './Form';

class App extends Component {
    state = {
        name: ''
    };

    _updateName = event => {
        const value = event.target.value;
        this.setState({ name: value });
    };
    render() {
        return (
            <div>
                <Hello name={this.state.name} />
                <Form updateNameHandler={this._updateName} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));