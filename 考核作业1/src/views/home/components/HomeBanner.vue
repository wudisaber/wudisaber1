<!--  -->
<template>
  <div class="home-banner">
    <mt-swipe :auto="5000">
      <mt-swipe-item v-for="homeBannerListData in homeBannerListDatas" :key="homeBannerListData.id">
        <img :src="homeBannerListData.imgsrc" alt />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
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
    };
  }
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.home-banner {
  width: 100%;
  height: 4.6rem;
  margin-bottom: 5px;
  img {
    width: 100%;
    height: 4.6rem;
  }
}
</style>