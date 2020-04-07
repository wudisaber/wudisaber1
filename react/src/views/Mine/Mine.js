import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import MineHeaderComponent from "./component/MineHeader"
import MineContentComponent from "./component/MineContent"

class MineComponent extends Component {
    render() {
        return (
            <div>
                <Route to={"/mobile/mine"} component={MineHeaderComponent}></Route>
                <Route to={"/mobile/mine"} component={MineContentComponent}></Route>
            </div>
        );
    }
}

export default MineComponent;