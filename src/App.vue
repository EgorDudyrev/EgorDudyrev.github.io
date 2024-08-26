<script setup>
import TheHeader from './components/TheHeader.vue'
import TheBody from '@/components/TheBody.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>


<template>
  <div id="theApp">
  <TheHeader></TheHeader>
  <TheBody></TheBody>
  <footer><TheFooter></TheFooter></footer>
  <!--<RouterView />-->
  </div>
</template>

<style scoped>
#overview {
  min-height: 80vh;
  vertical-align: middle;
  padding-top: 10%;
}

#posts {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>


<script>
export default {
  name: 'App'
}
</script>