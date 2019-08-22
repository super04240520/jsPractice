<template>
  <div>
    <Top ></Top>
   <router-view/>
  </div>
</template>

<script>
import Top from "../components/Top";
import {getNews} from "../api/getMsg"
import { constants } from 'crypto';
export default {
  name: "home",
  data() {
    return {
     topNews:""
    };
  },
  components: {
    Top
  },
  methods: {
   getTopNews(){
      return getNews().then(res => {
        this.topNews = res.data;
        console.log(this.topNews)
      })
   }
  }
};
</script>

<style lang="scss" scoped>
</style>