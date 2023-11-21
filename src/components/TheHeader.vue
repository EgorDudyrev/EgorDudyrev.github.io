<template>  
<header>
    <img alt="Portait" id="portrait" src="@/assets/portrait_big.jpg"/>
    <div id="resume">
        <h1>Egor Dudyrev</h1>
        <h2>PhD student in Explainable rule-based machine learning</h2>

        <p>
            I am a 2nd year PhD student in <a href="https://www.univ-lorraine.fr">Université de Lorraine</a> (Nancy, France) and <a href="https://www.hse.ru/">HSE University</a> (Moscow, Russia).
            I am working full-time as a doctorant in <a href="https://www.loria.fr/">Loria</a> research laboratory in Nancy, France (team <a href="https://orpailleur.loria.fr">Orpailleur</a>).
            My main research interests lie in applying the mathematical language of Formal Concept Analysis (FCA) to practical problems of Explainable rule-based machine learning and Ordered data analysis.
        </p>
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
</header>
</template>

<script>
  export default {
    name: 'TheHeader'
  }
</script>

<style scoped>

div {
    padding-left: 1vw;
    padding-right: 1vw;
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
    max-width: 800px;
}


@media (min-width: 1024px) {
  header {
    place-items: center;
    display: grid;
    grid-template-columns: 1fr 2fr;
  };
}
</style>