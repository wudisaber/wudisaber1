<!--  -->
<template>
  <div class="home-list">
    <ul class="homeList">
      <li v-for="listData in listDatas" :key="listData.product_id">
        <router-link :to="'/homeListDetail/'+listData.product_id">
          <img :src="listData.product_img_url" />
          <span>{{listData.product_name}}</span>
          <div class="price">
            <span>{{listData.product_price}}</span>
            <span>{{listData.product_dprice}}</span>
          </div>
          <div class="text">
            <span>{{listData.product_text1}}</span>
            <span>{{listData.product_text2}}</span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import ListDatas from "./data/list.json";
import Axios from "axios";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      listDatas: []
    };
  },
  methods: {
    homeListFn() {
      Axios.get("http://localhost:3000/api/product").then(res => {
        this.listDatas = res.data;
      });
    }
  },
  mounted() {
    this.homeListFn();
  }
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.home-list {
  width: 100%;
  .homeList {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
    li:nth-child(2n + 1) {
      margin: 0px 11px 10px;
    }
    li {
      width: 45%;
      height: 7rem;
      border: 1px solid #cccccc;
      img {
        width: 100%;
        height: 4rem;
      }
      span {
        display: block;
        font-size: 0.4rem;
        text-indent: 0.2rem;
        padding-bottom: 25px;
      }
      .price {
        width: 100%;
        height: 0.3rem;
        display: flex;
        margin-bottom: 25px;
        span:nth-child(1) {
          color: #f00;
          font-size: 0.5rem;
          margin-right: 30px;
          &::before {
            content: "￥";
          }
        }
        span:nth-child(2) {
          color: gray;
          line-height: 0.8rem;
          text-decoration: line-through;
          &::before {
            content: "￥";
          }
        }
      }
    }
  }
  .text {
    display: flex;
    color: gray;
    span:nth-child(1) {
      margin-right: 60px;
    }
  }
}
</style>