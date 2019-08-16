<template>
  <div>
    
    <van-tabbar style="height:40px;" v-model="active" active-color="#07c160" inactive-color="#000">
      <van-tabbar-item replace to="/home" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item replace to="/hotnews" icon="search">热点</van-tabbar-item>
      <van-tabbar-item replace to="/samecity" icon="location-o">同城</van-tabbar-item>
      <van-tabbar-item replace to="/personal" icon="contact">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
import "vant/lib/tabbar/style";
Vue.use(Tabbar).use(TabbarItem);
export default {
  name: "bottom",
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang="scss" scoped>
</style>