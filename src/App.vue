<script setup>
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

<style scoped>
</style>


<script>
export default {
  name: 'App'
}
</script>