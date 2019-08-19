<template>

 <van-tabs  @click="onClick">
  <van-tab   v-for="index in arr" :key="index.id" :title="index.name">
    <div class=""></div>
  </van-tab>
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
       arr:[{name:'时势',id:1},{name:'娱乐',id:2},{name:'体育',id:3},{name:'音乐',id:4}],
       
    };
  },
  methods: {
    onClick(name,title){
    var topTitle = title
      this.$emit('changePage',topTitle);

      
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