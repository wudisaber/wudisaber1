import React, { Component } from 'react';

class CategoryLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
    }


    render() {
        return (
            <div className="goods-content-wrap" id="scroll-right">
                {/* <div>
                    {
                        this.state.categoryListDatas.map((goodsList, index) => {
                            return (
                                <div className="goods-wrap" key={index}>
                                    <div className="category-name"></div>
                                    <div className="goods-item-wrap">
                                        {
                                            goodsList.child.map((goods, index) => {
                                                return (
                                                    <ul key={index}>
                                                        <li><img src={goods.imgsrc} alt="" /></li>
                                                        <li>{goods.cart_name}</li>
                                                    </ul>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div> */}
            </div>
        );
    }
}

export default CategoryLeft;