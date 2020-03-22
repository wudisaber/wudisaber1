<!--  -->
<template>
  <div class="footer">
    <ul>
      <router-link to="/" tag="li">
        <div class="navimg">
          <i class="iconfont icon-home"></i>
        </div>
        <span>首页</span>
      </router-link>
      <router-link to="/category" tag="li">
        <div class="navimg">
          <i class="iconfont icon-fenlei"></i>
        </div>
        <span>分类</span>
      </router-link>
      <router-link to="/cart" tag="li">
        <div class="navimg">
          <i class="iconfont icon-ziyuan"></i>
        </div>
        <span>购物车</span>
      </router-link>
      <router-link to="/mine" tag="li">
        <div class="navimg">
          <i class="iconfont icon-icon-"></i>
        </div>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  z-index: 999;
  ul {
    display: flex;
    height: 1.7rem;
    justify-content: center;
    align-items: center;
    background: #fafafa;

    li {
      width: 25%;
      height: 1rem;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      border-right: 1px solid lightgray;
      padding-bottom: 10px;
      span {
        font-size: 0.32rem;
      }
      .navimg {
        i {
          font-size: 0.8rem;
        }
      }
    }
  }
}
.router-link-active {
  color: green;
}
</style>