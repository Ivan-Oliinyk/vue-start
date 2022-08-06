<template>
  <nav class="navbar">
    <div class="wrapper">
      <h2>Vue 3 basic</h2>
      <ul class="navbar-wrapper">
        <li>
          <router-link to="/posts">Posts page</router-link>
        </li>
        <li>
          <router-link to="/about">About page</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "nav-bar"
}
</script>

<style scoped>
.navbar {

  inline-size: 100%;
  min-block-size: 5rem;
  background-color: burlywood;
  font-size: 2rem;
  font-weight: 700;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  color: beige;
  box-shadow: 2px 2px 4px gray;
}

.wrapper {
  padding: 0 2rem;
  max-inline-size: 192rem;
  width: 100%;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
  grid-template-columns:  1fr auto;
  align-items: center;
}

.navbar-wrapper {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}

a {
  text-decoration: none;
  color: beige;
  transition: color 0.3s linear;
}

a:hover, a:focus {
  color: darkslateblue;
}


</style>