import React, { Component } from 'react';
import { Route, withRouter } from 'react-router';
import ButtonMUI from './Components/Button';

class HomePage extends Component {
    render(){
        return <div>Home Page Corno
            <div>
            <a onClick={() => this.props.history.push("/champion")}>
                Champion
            </a>
            </div>
            <div>
            <a onClick={() => this.props.history.push('/summoner')}>
                Summoner
            </a>
            </div>
        </div>
    }
}

export default withRouter(HomePage);