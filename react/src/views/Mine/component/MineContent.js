import React, { Component } from 'react';
import "../../../assets/css/mineContent.css"

class MineContent extends Component {
    render() {
        return (
            <div className="mine-content">
                <div className="tx">
                    <img src="http://img0.imgtn.bdimg.com/it/u=284185776,1831341858&fm=26&gp=0.jpg" />
                    <span>寒星晓月</span>
                </div>
                <div className="dingdan">
                    <span>全部订单</span>
                    <span>查看全部订单 ></span>
                </div>
                <ul className="list">
                    <li>
                        <i className="iconfont icon-daifukuan"></i>
                        <span>待付款(0)</span>
                    </li>
                    <li>
                        <i className="iconfont icon-xiaoxi"></i>
                        <span>待收货(0)</span>
                    </li>
                    <li>
                        <i className="iconfont icon-daishouhuo-"></i>
                        <span>已完成(0)</span>
                    </li>
                    <li>
                        <i className="iconfont icon-tuikuan"></i>
                        <span>退款/售后(0)</span>
                    </li>
                </ul>
                <ul className="address">
                    <li>
                        <span>地址管理</span>
                        <span>></span>
                    </li>
                    <li>
                        <span>优惠卷</span>
                        <span>></span>
                    </li>
                    <li>
                        <span>联系客服</span>
                        <span>></span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default MineContent;