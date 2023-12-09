<template>
  <div id="the_header">
    <img alt="Portait" id="portrait" src="@/assets/portrait_big.jpg"/>
    <div id="resume">
      <header>
        <span>
        <h1>Egor Dudyrev</h1>
        <h2>PhD student in Rule-based Explainable AI</h2>
      </span>
      </header>
        <ul id="resume_list">
          <li>2nd year PhD in <a href="https://www.univ-lorraine.fr">Université de Lorraine</a> (Nancy, France)</li>
          <li>3rd year PhD in <a href="https://www.hse.ru/">HSE University</a> (Moscow, Russia)</li>
          <li>Full-time doctorant in <a href="https://www.loria.fr/">Loria</a> research laboratory, team <a href="https://orpailleur.loria.fr">Orpailleur</a> (Nancy, France)</li>
          <li>Interested in applying the theory of <a href="https://en.wikipedia.org/wiki/Formal_concept_analysis">Formal Concept Analysis</a> to the practice of <a href="https://en.wikipedia.org/wiki/Explainable_artificial_intelligence">Explainable AI</a></li>
        </ul>
        
        <br>
        <p>
            <!--<b style="font-weight: bold;">Links:</b> -->
            <a href="https://github.com/EgorDudyrev"> <font-awesome-icon :icon="['fab', 'github']" class="fa-icon"/> GitHub</a>
            &emsp;
            <a href="https://scholar.google.com/citations?user=6Akz9I8AAAAJ&hl=en&oi=ao"> <font-awesome-icon :icon="['fas', 'graduation-cap']" class="fa-icon"/> Google Scholar</a>
            &emsp;
            <!--<a href="https://dblp.org/pid/294/3938.html">DBLP</a>,-->
            <a href="https://www.linkedin.com/in/egor-dudyrev-1b77a8214/"> <font-awesome-icon :icon="['fab', 'linkedin']" class="fa-icon"/> LinkedIn</a>
        </p>
        <br>
        <p class="color_comment_light"><i>&lt;The website is under construction&gt;</i></p>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'TheHeader'
  }
</script>

<style scoped>
#the_header {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
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