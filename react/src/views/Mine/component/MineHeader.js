import React, { Component } from 'react';

import "../../../assets/css/mineHeader.css"

class HomeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="header">
                <div className="header_content">
                    <div className="headerUp">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <span>
                            中国移动
          <i className="iconfont icon-wuxian"></i>
                        </span>
                        <span>上午11:50</span>
                        <span>
                            <i className="iconfont icon-zhifeiji feiji"></i>
                            <i className="iconfont icon-lanya lanya"></i>
          76%
          <i className="iconfont icon-electricquantity2dianchidianliang"></i>
                        </span>
                    </div>
                    <div className="headerBottom">
                        <span>
                            <i className="iconfont icon-zuojiantou"></i>
                        </span>
                        <span className="title">个人中心</span>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeHeader;