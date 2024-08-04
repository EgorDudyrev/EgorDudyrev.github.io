<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/TheHeader.vue'
import TheBody from '@/components/TheBody.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>


<template>
  <TheHeader></TheHeader>
  <TheBody></TheBody>
  <TheFooter></TheFooter>
  <!--<RouterView />-->
</template>

<script>
  export default {
    name: 'App'
  }
</script>