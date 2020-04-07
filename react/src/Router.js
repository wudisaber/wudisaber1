import React, { Component } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import asyncComponent from "./components/AsyncComponent"  //引入封装的按需加载组件的模块
const FooterComponent = asyncComponent(() => import("./components/Footer"))
class RouterComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <React.Fragment>
            <Switch>
              <Route path={"/mobile"} component={FooterComponent}></Route>
              <Redirect to={"/mobile/home"}></Redirect>
            </Switch>
          </React.Fragment>
        </Router>
      </React.Fragment>
    );
  }
}

export default RouterComponent;