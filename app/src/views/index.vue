<template>
  <div>
    <router-view />
    <Top></Top>
  </div>
</template>

<script>
import Top from "../components/Top";

export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    Top
  }
};
</script>

<style lang="scss" scoped>
</style>