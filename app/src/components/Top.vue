<template>
 
 <van-tabs @click="onClick" swipeable>
  <van-tab title="时势">内容 1</van-tab>
  <van-tab title="体育">内容 2</van-tab>
  <van-tab title="娱乐">内容3</van-tab>
  <van-tab title="音乐">内容 4</van-tab>
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
    onClick(){
      
    }
    
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