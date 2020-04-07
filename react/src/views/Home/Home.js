import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Swiper from "swiper"
import HomeHeaderComponent from './component/HomeHeader'
import HomeListComponent from './component/HomeList'

import "../../assets/css/home.css"
import "../../assets/css/swiper.min.css"

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homeBannerListDatas: [
                {
                    id: 1,
                    imgsrc:
                        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3692631454,1643248172&fm=26&gp=0.jpg"
                },
                {
                    id: 2,
                    imgsrc:
                        "https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=0d28b3406dd0f703f9b293dc38fb5148/faf2b2119313b07e4dbbb55f03d7912397dd8c67.jpg"
                },
                {
                    id: 3,
                    imgsrc:
                        "https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=3fab52eca91ea8d395227204a70b30cf/43a7d933c895d143a11a01747cf082025aaf077c.jpg"
                }
            ]
        }
    }
    componentDidMount() {
        this.Banner()
    }
    Banner = () => {
        new Swiper(".swiper-container", {
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            pagination: {
                el: '.swiper-pagination',
            }
        })
    }
    render() {
        return (
            <div className="home">
                {/* 头部 */}
                <Route to={"/mobile/home"} component={HomeHeaderComponent}></Route>
                {/* 轮播图 */}
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            this.state.homeBannerListDatas.map((homeBannerListData, key) => {
                                return (
                                    <div className="swiper-slide" key={key}>
                                        <img src={homeBannerListData.imgsrc} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                {/* 产品 */}
                <Route to={"/mobile/home"} component={HomeListComponent}></Route>
            </div>
        );
    }
}

export default Home;