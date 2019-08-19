<template>
  <div>
<van-notice-bar
  text="今日被点爆asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf了"
  left-icon="volume-o"
/>
  </div>
</template>

<script>
    import Vue from 'vue';
import { NoticeBar } from 'vant';

Vue.use(NoticeBar);
export default {
  name: "hotnews",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>