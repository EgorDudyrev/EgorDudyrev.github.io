<script setup>

import IconText from '@/components/IconText.vue'
</script>

<template>
<footer>
  Profile photo by <IconText url="https://www.instagram.com/ptiza_lisiza/" icon-name="instagram" text="Daria Cherdyntseva"></IconText>
  <br>
  Website handmade with <IconText url="https://vuejs.org" icon-name="vuejs" text="Vue.js"></IconText>
  hosted by <IconText url="https://pages.github.com" icon-name="github" text="GitHub Pages"></IconText>
</footer>
</template>

<style scoped>
footer {
  margin-left:auto;
  margin-right:auto;
  margin-top:2em;
  text-align: center;
}
</style>