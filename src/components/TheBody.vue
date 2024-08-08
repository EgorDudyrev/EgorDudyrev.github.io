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


//const talks = entries.value.filter((v) => v.type === "talk");
</script>

<template>
<body>
  <section>
    <h1>Talks</h1>
    <ContentEntry v-for="entry in entriesByType('talk')" v-bind="entry"></ContentEntry>
  </section>
  <section>
    <h1>Software</h1>
    <ContentEntry v-for="entry in entriesByType('software')" v-bind="entry"></ContentEntry>
  </section>
  <section>
    <h1>Teaching</h1>
    <ContentEntry v-for="entry in entriesByType('teaching')" v-bind="entry"></ContentEntry>
  </section>
  <section>
    <h1>Publications</h1>
    <ContentEntry v-for="entry in entriesByType('publication')" v-bind="entry"></ContentEntry>
  </section>
  <section>
    <h1>Education</h1>
    <ContentEntry v-for="entry in entriesByType('education')" v-bind="entry"></ContentEntry>
  </section>
</body>
</template>

<style scoped>
h1 {
  text-align: left;
}
body {
  margin-left:auto;
  margin-right:auto;
  margin-top:2em;

  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>