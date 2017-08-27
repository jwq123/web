<template>
  <div id="app">
    <TheHead></TheHead>
    <TheContent>
      <router-view name="sider" slot="sidebar"></router-view>
      <router-view name="content" slot="content"></router-view>
    </TheContent>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import router from  './router/index.js';
import Home from '@/components/Home';
import TheHead from '@/components/TheHead';
import TheContent from '@/components/TheContent';
import Sider from '@/components/siderbar'
import TheFooter from '@/components/TheFooter'
export default {
  name: 'app',
  components:{
      Home,
      TheHead,
      Sider,
      TheFooter,
      TheContent
  },
}

</script>

<style scoped>
  *{
    margin:0;
    padding: 0;
  }
#app{
    width: 1370px;
    height:auto;
    margin:0 auto;
}
</style>
