<script setup>
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

// const links = ref([{title: 'The link to google', url: 'https://google.com', faicon: ['fas', 'graduation-cap']},
//  {title: 'The link to yandex', url: 'https://ya.ru'}])
// const authors = ref([{name: "Amedeo Napoli"}, {name: "Egor Dudyrev"}])
// const language = 'FR'
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <span v-show="props.authors">Authors: <span v-for="author in props.authors"> {{ author.name }} &emsp; </span><br></span>
    <font-awesome-icon :icon="['fas', 'location-dot']" /> {{ props.location }}
    &emsp;
    <font-awesome-icon :icon="['fas', 'calendar-alt']" /> {{ props.date }}
    <span v-show="props.language">&emsp;<font-awesome-icon :icon="['fas', 'language']" /> {{ props.language }}</span>
    <br>
    Abstract: {{ props.abstract }}
    <br>
    <li v-for="link in props.links"><a :href="link.url">
      <font-awesome-icon v-show="link.faicon" :icon="link.faicon" /> {{ link.title }}
    </a></li>

    <p class="color_comment_light"><i>Published: {{ props.publicationDate }}</i></p>
  </div>
</template>

<style scoped>
.color_comment_light {
  text-align: right;
}
</style>