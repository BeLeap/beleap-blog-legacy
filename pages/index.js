import React, { Component } from 'react';
import { Button } from 'primereact/button';
import logo from '../static/primereact-logo.png';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class Index extends Component {
    constructor() {
        super();
        this.state = { count: 0 };
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to PrimeReact</h2>
                </div>
                <div className="App-intro">
                    <Button label="Click" icon="pi pi-check" onClick={this.increment} />

                    <p>Number of Clicks: {this.state.count}</p>
                </div>

<style jsx>{`
.App {
    text-align: center;
    font-family: "Open Sans", "Helvetica Neue", sans-serif;
}

.App-logo {
    animation: App-logo-spin infinite 20s linear;
    height: 80px;
}

.App-header {
    background-color: #222;
    height: 190px;
    padding: 20px;
    color: white;
}

.App-intro {
    padding: 2em;
    font-size: large;
}
`}</style>
            </div>
        );
    }
}

export default Index;