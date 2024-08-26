<script>
import IconText from '@/components/IconText.vue'

export default {
  name: 'TheHeader',
  components: { IconText }
}
</script>


<template>
<header id="theHeader">
    <img alt="Portait" id="portrait" src="@/assets/portrait_big.jpg"/>
    <div id="resume">
      <header>
        <h1>Egor Dudyrev</h1>
        <h2>PhD student in Rule-based Explainable AI</h2>
      </header>
        <ul id="resume_list">
          <li>2nd year PhD in <a href="https://www.univ-lorraine.fr">Université de Lorraine</a> (Nancy, France)</li>
          <li>3rd year PhD in <a href="https://www.hse.ru/">HSE University</a> (Moscow, Russia)</li>
          <li>Full-time doctorant in <a href="https://www.loria.fr/">Loria</a> research laboratory, team <a href="https://orpailleur.loria.fr">Orpailleur</a> (Nancy, France)</li>
          <li>Interested in applying the theory of <a href="https://en.wikipedia.org/wiki/Formal_concept_analysis">Formal Concept Analysis</a> to the practice of <a href="https://en.wikipedia.org/wiki/Explainable_artificial_intelligence">Explainable AI</a></li>
        </ul>
        
        <br>
        <ul class="inline_list">
          <li><IconText url="https://www.github.com/EgorDudyrev" iconName="github" text="GitHub"></IconText></li>
          <li><IconText url="https://scholar.google.com/citations?user=6Akz9I8AAAAJ&hl=en&oi=ao" iconName="graduation-cap" text="Google Scholar"></IconText></li>
          <li><IconText url="https://www.linkedin.com/in/egor-dudyrev-1b77a8214/" iconName="linkedin" text="LinkedIn"></IconText></li>
        </ul>

        <br>
        <p class="color_comment_darkest">&lt;The website is under construction&gt;</p>
    </div>
</header>
</template>


<style scoped>
#theHeader {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    height: 95vh;
}

#portrait {
    height: 50vh;
    min-height: 300px;
    max-height: 500px;
    display: block;
    justify-self: right;
    border-radius: 5px;
}

#resume {
   min-width: 100px;
   padding-left: 5px;
}

#resume_list {
  list-style-type: none;
  padding: 2px;
}
</style>