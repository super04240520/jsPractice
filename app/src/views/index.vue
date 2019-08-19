<template>
  <div>
    <Top @changePage="Page"></Top>
    
  </div>
</template>

<script>
import Top from "../components/Top";

export default {
  name: "home",
  data() {
    return {
      top: ""
    };
  },
  components: {
    Top
  },
  methods: {
    Page(topTitle) {
      this.top =topTitle
      console.log(this.top);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>