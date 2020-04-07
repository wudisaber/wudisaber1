import React, { Component } from 'react';
import "../../../assets/css/cartContent.css"

class CartContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            imgsrc: "http://img5.imgtn.bdimg.com/it/u=2842441648,2557979843&fm=26&gp=0.jpg"
        }
    }

    render() {
        return (
            <div className="cart">
                <div className="cart-content">
                    <ul>
                        <li >
                            <div className="select" >
                                <i className="iconfont icon-weixuanzhong"></i>
                                {/* <i className="iconfont icon-xuanzhong"></i> */}
                            </div>
                            <div className="cart-img">
                                <img src={this.state.imgsrc} />
                            </div>
                            <div className="cart-info">
                                <div className="cart-title">小米笔记本</div>
                                <div className="cart-wrap">
                                    <span className="price">￥4799.00</span>
                                    <div className="number">
                                        <a >-</a>
                                        <input type="text" defaultValue="1" />
                                        <a >+</a>
                                    </div>
                                </div>
                            </div >
                        </li >
                    </ul >
                </div >
                <div className="cartFooter">
                    <div className="checkAll">
                        <i className="iconfont icon-weixuanzhong"></i>
                        {/* <i className="iconfont icon-xuanzhong"></i> */}
                        <span>全选</span>
                    </div>
                    <div className="priceAll">
                        <span>￥4799</span>
                    </div>
                    <div className="tobuy">
                        <a>立即结算</a>
                    </div>
                </div >
            </div >
        );
    }
}

export default CartContent;