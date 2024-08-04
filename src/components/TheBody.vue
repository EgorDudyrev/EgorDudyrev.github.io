<script setup>

import ContentEntry from '@/components/ContentEntry.vue'
import { ref } from 'vue'

const entries = ref([
  {
    title: 'Casual Concept Analysis', type: 'talk',
    location: 'PhD Pizza time @ LORIA / INRIA, Nancy, France',
    date: 'Jun 10, 2024',
    language: 'EN',
    abstract:
      'During the talk, we will discuss how one can find stable patterns and implications in the datasets using Formal Concept Analysis. The field of FCA has a strong mathematical background in Lattice and Set theories. However, in this talk, I will omit the formal definitions and I will rely more on the semantics of FCA that mimic some ways humans understand the world (and data).\n' +
      'So we will consider some real-world datasets and we will use FCA-based software.  With this tool we will find the implications like “if values of a numerical column lie in interval X and values of a categorical column belong to set Y, then all values of a textual column contain n-grams Z”.\n' +
      'I hope that the presented techniques will help you with your data analysis tasks, and that your future success stories will help us improve and promote the presented techniques.',
    links: [{title: 'Slides', url:'...', faicon: ['fas', 'file-pdf']}, {title: 'LinkedIn post', url:'...', faicon:['fab', 'linkedin']}],
    publicationDate: 'Aug 4, 2024'
  }
])
</script>

<template>
<body>
  <section>
    <h1>Talks</h1>
    <!--<div v-for="entry in entries"><ContentEntry v-bind="entry"></ContentEntry></div>-->
    <ContentEntry v-for="entry in entries" v-bind="entry"></ContentEntry>

    HELSLSDF


    <h2>Casual Concept Analysis</h2>
    Where: PhD Pizza time @ LORIA / INRIA, Nancy, France
    When: Jun 10, 2024
    Language: EN
    Abstract: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
    Links: <a>Slides</a> <a>LinkedIn post</a>
    Published: Aug 4, 2024


    <h2>Неформальное введение в Анализ Формальных Понятий</h2>
    Where: NoML Seminar @ Online
    Language: RU
    Abstract: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
    Links: <a>Slides</a> <a>YouTube recording</a>

  </section>
  <section>
    <h1>Software</h1>

    <h2>Caspailleur</h2>
    Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
    Links: <a>GitHub</a> <a>PyPI</a>

    <h2>Paspailleur</h2>
    Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
    Links: <a>GitHub</a> <a>PyPI</a>

    <h2>Expailleur</h2>
    Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
    Links: <a>GitHub</a>

  </section>
  <section>
    <h1>Teaching</h1>

    <h2>Data Mining</h2>
    Where: TD at IDMC, Nancy, France
    When: September - November 2023

    <h2>Ordered Sets in Data Analysis</h2>
    Where: Seminars at HSE University, Moscow, Russia
    When: September - October 2022

  </section>
  <section>
    <h1>Publications</h1>

    <h2>Data Complexity: An FCA-based approach</h2>
    Where: International Journal of Approximate Reasoning 165, 109084
    When: February 2024
    Authors: A Buzmakov, E Dudyrev, SO Kuznetsov, T Makhalova, A Napoli
    Abstract: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
  </section>
  <section>
    <h1>Education</h1>

    <h2>Doctoral Study (WIP)</h2>
    Where: Université de Lorraine
    When: January 2023 - ...

    <h2>Doctoral Study (WIP)</h2>
    Where: HSE University
    When: November 2021 - ...

    <h2>Master</h2>
    Where: HSE University
    When: September 2019 - June 2021

    <h2>Bachelor</h2>
    Where: Bauman University
    When: September 2015 - June 2019

  </section>
  <section>
    <h1>Work</h1>

    <h2>Doctorant</h2>
    Where: Team Orpailleur @ LORIA, Nancy, France
    When: December 2022 - November 2025

    <h2>Intern Researcher</h2>
    Where: ISSA Laboratory @ HSE University, Moscow, Russia
    When: April 2021 - November 2022

    <h2>Data Scientist</h2>
    Where: DWH Department @ Sportmaster, Moscow, Russia
    When: November 2018 - April 2021

    <h2>Data Science Intern</h2>
    Where: Treasury Department @ Sberbank, Moscow, Russia
    When: April 2018 - November 2018
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