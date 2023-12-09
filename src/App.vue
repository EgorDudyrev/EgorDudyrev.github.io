<script setup>
import TheHeader from './components/TheHeader.vue'
import PostCard from './components/PostCard.vue'
import { ref } from 'vue' 

const posts = ref([
  {
    id: 8419988,
    title: 'Human Knowledge Models',
    subtitle: 'or When the simplest rules work as good as gradient boostings',
    type: 'talk',
    language: 'Russian',
    venue: 'NoML seminar',
    tags: ['Human Knowledge Models', 'Binary classification'],
    published: 'Dec 09, 2023',
    event_date: 'Dec 13, 2023',
    description: 'An introductory talk about Human Knowledge Models and their efficiency for NoML (Not-Only Machine Learning) community. The presentation and the video of the talk are to be published soon.'
  },
  {
    id: 4582797,
    title: "Stable patterns in Complex data",
    type: 'tutorial',
    language: 'English',
    venue: 'Travaux Dirigés IDMC',
    tags: ['Paspailleur', 'Binary data', 'Tabular data', 'Ngrams', 'Binary classification'],
    published: 'Dec 09, 2023',
    event_date: 'Nov 24, 2023',
    description:
      `Google Colab tutorial on how to find stable concepts in various data.
      The notebook uses the code of [Caspailleur](www.google.com) and Paspailleur packages.`
  },
  {
    id: 5928101,
    title: 'Data Complexity',
    subtitle: 'An FCA based approach',
    type: 'research paper',
    language: 'English',
    venue: 'IJAR',
    tags: ['FCA', 'Binary data', 'Data Analysis'],
    published: 'Dec 09, 2023',
    event_date: 'Nov 23, 2023',
    description: 
      `The paper, published in International Journal of Approximate Reasoning (Q1).
      My supervisors and I started working on the paper at the beginning of the year 2022.
      We set ourselves to find formal ways to measure the data complexity with the means of Formal Concept Analysis (FCA).
      For example, we say that the data is complex if its concept lattice contains many incomparable concepts.
      And we have already planned some projects where we will apply these findings to the real-world industrial data.
      <br>
      The paper speaks in the language of Formal Concept Analysis, so it might be hard to read for people with no FCA background. 
      At the same time, it could be a nice place to learn lots of specific terminology like intents, pseudo-intents, keys, minimum generators, etc.`

  },
])
</script>


<template>
<div class="wrapper">
  <div id="overview"><TheHeader></TheHeader></div>
  <div id="posts">
    <PostCard v-for="post in posts" :key="post.id" :post="post"></PostCard>
  </div>
</div>
  <!--<RouterView />-->
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