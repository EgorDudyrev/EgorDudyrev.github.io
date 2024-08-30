<script setup>

import ContentEntry from '@/components/ContentEntry.vue'
import { onMounted, ref, watchEffect } from 'vue'
import EventService from "@/services/EventService.js";

const entries = ref(null);
onMounted(() => {
  watchEffect(() => {
    entries.value = null;
    EventService.getEntries()
      .then((response) => {
        entries.value = response.data;
      });
  });
});

function entriesByType (type) {
  return entries.value ? entries.value.filter(v => v.type === type) : null
}

</script>

<template>
  <nav>
    <ul class="inline_list">
      <li><a href="#talks">Talks</a></li>
      <li><a href="#software">Software</a></li>
      <li><a href="#teaching">Teaching</a></li>
      <li><a href="#publications">Publications</a></li>
      <li><a href="#education">Education</a></li>
    </ul>
  </nav>
<body>
  <section id="talks">
    <h1>Talks</h1>
    <ContentEntry v-for="entry in entriesByType('talk')" v-bind="entry"></ContentEntry>
  </section>
  <section id="software">
    <h1>Software</h1>
    <ContentEntry v-for="entry in entriesByType('software')" v-bind="entry"></ContentEntry>
  </section>
  <section id="teaching">
    <h1>Teaching</h1>
    <ContentEntry v-for="entry in entriesByType('teaching')" v-bind="entry"></ContentEntry>
  </section>
  <section id="publications">
    <h1>Publications</h1>
    <ContentEntry v-for="entry in entriesByType('publication')" v-bind="entry"></ContentEntry>
  </section>
  <section id="education">
    <h1>Education</h1>
    <ContentEntry v-for="entry in entriesByType('education')" v-bind="entry"></ContentEntry>
  </section>
</body>
</template>

<style scoped>
h1 {
  text-align: left;
}

nav {
  height: 5vh;
  font-size: large;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
  vertical-align: middle;
}
nav ul li {
  padding-left: 5px;
  padding-right: 5px;
  margin: 0;
}

body {
  margin-left:auto;
  margin-right:auto;
  margin-top:2em;

  display: flex;
  flex-direction: column;
  flex-grow: 1;

  scroll-margin-top: 1em;

  max-width: 1000px;
}

@media screen and (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
</style>