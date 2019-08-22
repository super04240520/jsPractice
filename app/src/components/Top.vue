<template>
  <van-tabs animated swipeable>
    <van-tab title="时势">
      <div v-for="items in newsArr" :key="items.id" class="box">
        <img :src="items.newsImg" alt />
        <p>{{items.newsTitle}}</p>
      
      </div>
    </van-tab>
    <van-tab title="娱乐">2</van-tab>
    <van-tab title="体育">3</van-tab>
    <van-tab title="音乐">4</van-tab>
  </van-tabs>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
Vue.use(Tab).use(Tabs);
export default {
  name: "top",
  data() {
    return {
      newsArr: [
        { newsTitle: "国家大事", des: "简介", newsImg: "../static/logo.png" }
      ]
    };
  },
  methods: {
    // onClick(name,title){
    // var topTitle = title
    //   // this.$emit('changePage',topTitle);
    // }
  }
};
</script>

<style  scoped>
.van-tabs >>> .van-ellipsis {
  font-size: 20px;
}
.van-tabs >>> .van-tabs__nav .van-tabs__nav--line {
  height: 40px;
}
.box {
  margin:50px auto 0 auto;
  width: 600px;
  height: 200px;
  border:2px solid #ccc;
  display: flex;
}
.box  img{
    width: 200px;
    height: 200px;
    border:1px solid red;
}
</style>