<script setup>
import IconText from '@/components/IconText.vue'

const props = defineProps({
  title: String,
  location: String,
  date: String,
  publicationDate: String,
  abstract: String,
  links: Array,
  authors: Array,
  language: String,
})

</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <ul v-show="props.authors" class="inline_list">Authors: <li v-for="author in props.authors"> {{ author.name }}</li></ul>
    <ul class="inline_list">
      <li><IconText icon-name="location-dot" :text="props.location"></IconText></li>
      <li><IconText icon-name="calendar-alt" :text="props.date"></IconText></li>
      <li><IconText icon-name="language" :text="props.language"></IconText></li>
    </ul>
    <ul v-show="props.links" class="inline_list">
      <li v-for="link in props.links"><IconText :url="link.url" :icon-name="link.faicon" :text="link.title"></IconText></li>
    </ul>
    <details v-if="props.abstract">
      <summary>Abstract: </summary>
      <div class="abstract">{{ props.abstract }}</div>
      <br>
    </details>
    <p class="color_comment_light"><i>Published: {{ props.publicationDate }}</i></p>
  </div>
</template>

<style scoped>
.color_comment_light {
  text-align: right;
}

.abstract {
  white-space: pre-line;
  margin-left: 3vh;
}

details[open] > summary {
  color: var(--color-prime-dark);
  transition: 0.4s;
}
details > summary:hover {
  color: var(--color-prime-light);
  transition: 0.4s;
}

</style>