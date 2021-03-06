import React, { Component } from 'react';
import Axios from 'axios'

import "../../../assets/css/homeList.css"

class HomeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homeListDatas: [
                {
                    "id": 1,
                    "imgsrc": "http://img0.imgtn.bdimg.com/it/u=732975577,3500961473&fm=26&gp=0.jpg",
                    "title": "小米无线鼠标",
                    "price1": "64.00",
                    "price2": "64.00",
                    "text1": "新品",
                    "text2": "销量：0"
                },
                {
                    "id": 2,
                    "imgsrc": "http://img5.imgtn.bdimg.com/it/u=2842441648,2557979843&fm=26&gp=0.jpg",
                    "title": "小米笔记本",
                    "price1": "4799.00",
                    "price2": "4799.00",
                    "text1": "新品",
                    "text2": "销量：0"
                },
                {
                    "id": 3,
                    "imgsrc": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3692631454,1643248172&fm=26&gp=0.jpg",
                    "title": "小米手机",
                    "price1": "999.00",
                    "price2": "999.00",
                    "text1": "新品",
                    "text2": "销量：0"
                },
                {
                    "id": 4,
                    "imgsrc": "https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=0d28b3406dd0f703f9b293dc38fb5148/faf2b2119313b07e4dbbb55f03d7912397dd8c67.jpg",
                    "title": "小米手机",
                    "price1": "1999.00",
                    "price2": "1999.00",
                    "text1": "新品",
                    "text2": "销量：0"
                }
            ]
        }
    }
    render() {
        return (
            <div className="home-list">
                <ul className="homeList">
                    {
                        this.state.homeListDatas.map((homeListData, key) => {
                            return (
                                <li key={key}>
                                    <img src={homeListData.imgsrc} />
                                    <span>{homeListData.title}</span>
                                    <div className="price">
                                        <span>￥{homeListData.price1}</span>
                                        <span>￥{homeListData.price2}</span>
                                    </div>
                                    <div className="text">
                                        <span>{homeListData.text1}</span>
                                        <span>{homeListData.text2}</span>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default HomeList;