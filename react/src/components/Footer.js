import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import asyncComponent from "./AsyncComponent"
import "../assets/css/footer.css"
const HomeComponent = asyncComponent(() => import("../views/Home/Home"))
const CategoryComponent = asyncComponent(() => import("../views/Category/Category"))
const CartComponent = asyncComponent(() => import("../views/Cart/Cart"))
const MineComponent = asyncComponent(() => import("../views/Mine/Mine"))
class FooterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeHome: true,
            activeCategory: false,
            activeCart: false,
            activeMine: false
        }
    }
    componentWillMount() {
        this.hanleFooter(this.props)
    }
    componentWillReceiveProps(props) {
        this.hanleFooter(props)
    }
    goPage = (componentUrl) => {
        this.props.history.replace(componentUrl)
    }
    hanleFooter = (props) => {
        console.log(props.location.pathname)
        switch (props.location.pathname) {
            case "/mobile/home":
                this.setState({
                    activeHome: true,
                    activeCategory: false,
                    activeCart: false,
                    activeMine: false
                })
                break;
            case "/mobile/category":
                this.setState({
                    activeHome: false,
                    activeCategory: true,
                    activeCart: false,
                    activeMine: false
                })
                break;
            case "/mobile/cart":
                this.setState({
                    activeHome: false,
                    activeCategory: false,
                    activeCart: true,
                    activeMine: false
                })
                break;
            case "/mobile/mine":
                this.setState({
                    activeHome: false,
                    activeCategory: false,
                    activeCart: false,
                    activeMine: true
                })
                break;

            default:
                break;
        }
    }
    render() {
        return (
            <div>
                <React.Fragment>
                    <Switch>
                        <Route path={"/mobile/home"} component={HomeComponent}></Route>
                        <Route path={"/mobile/category"} component={CategoryComponent}></Route>
                        <Route path={"/mobile/cart"} component={CartComponent}></Route>
                        <Route path={"/mobile/mine"} component={MineComponent}></Route>
                    </Switch>
                </React.Fragment>
                <div className="footer">
                    <ul onClick={this.goPage.bind(this, "/mobile/home")}>
                        <li className={this.state.activeHome ? "home-active" : "home"}>
                            <i className="iconfont icon-home "></i>
                        </li>
                        <li className={this.state.activeHome ? "text-active" : "text"}>首页</li>
                    </ul>
                    <ul onClick={this.goPage.bind(this, "/mobile/category")}>
                        <li className={this.state.activeCategory ? "category-active" : "category"}>
                            <i className="iconfont icon-fenlei"></i>
                        </li>
                        <li className={this.state.activeCategory ? "text-active" : "text"}>分类</li>
                    </ul>
                    <ul onClick={this.goPage.bind(this, "/mobile/cart")}>
                        <li className={this.state.activeCart ? "cart-active" : "cart"}>
                            <i className="iconfont icon-gouwuche
"></i>
                        </li>
                        <li className={this.state.activeCart ? "text-active" : "text"}>购物车</li>
                    </ul>
                    <ul onClick={this.goPage.bind(this, "/mobile/mine")}>
                        <li className={this.state.activeMine ? "mine-active" : "mine"}>
                            <i className="iconfont icon-icon-"></i>
                        </li>
                        <li className={this.state.activeMine ? "text-active" : "text"}>我的</li>
                    </ul>
                </div>
            </div >
        );
    }
}

export default FooterComponent;