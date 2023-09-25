<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Portait" class="logo" src="@/assets/portrait_big.jpg" width="200"/>

    <div class="wrapper">
      <h1 class="color1">Egor Dudyrev</h1>
      <h2 class="color3">PhD student in explainable rule-based machine learning</h2>
      <p>&lt;The website is under construction&gt;</p>
    </div>
    
    
    <!--<div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>-->
  </header>

  <!--<RouterView />-->
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.color1 {
  text-decoration: none;
  color: #3d2821;
  transition: 0.4s; 
}

.color2 {
  text-decoration: none;
  color: #c4e5fb;
  transition: 0.4s;
}

.color3 {
  text-decoration: none;
  color: #718ca8;
  transition: 0.4s;
}

.color4 {
  text-decoration: none;
  color: #6b5042;
  transition: 0.4s;
}

.color5 {
  text-decoration: none;
  color: #8bbcdf;
  transition: 0.4s;
}


.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

h1 {
  color: color1;
  font-weight: bold;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
