<template>

 <van-tabs   animated swipeable>
 <van-tab to="/news" title="时势"><div>sss</div></van-tab>
 <van-tab to="/happy" title="娱乐" >2</van-tab>
 <van-tab to="/sports" title="体育">3</van-tab>
 <van-tab to="/music" title="音乐" >4</van-tab>
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
.van-tabs>>> .van-tabs__nav .van-tabs__nav--line{
  height:40px;
}

</style>