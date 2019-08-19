<template>
  <div id="app">
    <router-view/>
    
    <Bottom></Bottom>
  </div>
</template>
<script>
import Bottom from "./components/Bottom"
export default {
  name: "app",
  data() {
    return {
      
    };
  },
 components:{
   Bottom,
 }
};
</script>
<style>
#app {

  height: 100px;
  padding:20px 50px 0 50px;
}

</style>
