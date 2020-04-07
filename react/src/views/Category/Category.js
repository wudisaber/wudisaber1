import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Axios from 'axios'
import CategoryHeader from "./component/CategoryHeader"
import CategoryRight from "./component/CategoryRight"
import "../../assets/css/categoryHeader.css"
import "../../assets/css/category.css"

class CategoryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            categoryListDatas: [
                {
                    cat_id: 1,
                    cat_name: "手机",
                    title: "手机",
                    child: [
                        {
                            cat_id: 1,
                            imgsrc: "http://img3.imgtn.bdimg.com/it/u=3294907501,2095577478&fm=26&gp=0.jpg"
                        },
                        {
                            cat_id: 2,
                            imgsrc: "http://img3.imgtn.bdimg.com/it/u=3294907501,2095577478&fm=26&gp=0.jpg"
                        },
                        {
                            cat_id: 3,
                            imgsrc: "http://img3.imgtn.bdimg.com/it/u=3294907501,2095577478&fm=26&gp=0.jpg"
                        }
                    ]

                },
                {
                    cat_id: 2,
                    cat_name: "笔记本",
                    title: "笔记本",
                    child: [
                        {
                            cat_id: 1,
                            imgsrc: "http://img0.imgtn.bdimg.com/it/u=1415990093,28677445&fm=11&gp=0.jpg"
                        },
                        {
                            cat_id: 2,
                            imgsrc: "http://img0.imgtn.bdimg.com/it/u=1415990093,28677445&fm=11&gp=0.jpg"
                        },
                        {
                            cat_id: 3,
                            imgsrc: "http://img0.imgtn.bdimg.com/it/u=1415990093,28677445&fm=11&gp=0.jpg"
                        }
                    ]

                },
                {
                    cat_id: 3,
                    cat_name: "智能配件",
                    title: "智能配件",
                    child: [
                        {
                            cat_id: 1,
                            imgsrc: "http://img1.imgtn.bdimg.com/it/u=1776244666,2217997065&fm=26&gp=0.jpg"
                        },
                        {
                            cat_id: 2,
                            imgsrc: "http://img1.imgtn.bdimg.com/it/u=1776244666,2217997065&fm=26&gp=0.jpg"
                        },
                        {
                            cat_id: 3,
                            imgsrc: "http://img1.imgtn.bdimg.com/it/u=1776244666,2217997065&fm=26&gp=0.jpg"
                        }
                    ]

                },
                {
                    cat_id: 1,
                    cat_name: "周边配件",
                    title: "周边配件",
                    child: [
                        {
                            cat_id: 1,
                            imgsrc: "http://img1.imgtn.bdimg.com/it/u=2971453491,1833802586&fm=26&gp=0.jpg"
                        },
                        {
                            cat_id: 2,
                            imgsrc: "http://img1.imgtn.bdimg.com/it/u=2971453491,1833802586&fm=26&gp=0.jpg"
                        },
                        {
                            cat_id: 3,
                            imgsrc: "http://img1.imgtn.bdimg.com/it/u=2971453491,1833802586&fm=26&gp=0.jpg"
                        }
                    ]

                }
            ]
        }
        this.setListDatas = []
    }

    render() {
        return (
            <div>
                <Route to={"/mobile/category"} component={CategoryHeader}></Route>
                <div className="category-main">
                    <div id="scroll-left" className="category-left">
                        <div>
                            {
                                this.state.categoryListDatas.map((categoryList, index) => {
                                    return (
                                        <div className={categoryList.flag ? "category-item active" : "category-item"} key={index}>{categoryList.cat_name}</div>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <Route to={"/mobile/category"} component={CategoryRight}></Route>
                </div>
            </div>
        );
    }
}

export default CategoryComponent;