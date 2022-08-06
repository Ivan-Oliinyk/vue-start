<template>
  <div class="app">
    <nav-bar />
    <div class="content">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px;
  line-height: 1.2;
  font-family: "Roboto", sans-serif;
}

ul,
ol,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}

.app {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.content {
  padding: 0 2rem;
  inline-size: 100%;
  max-inline-size: 192rem;
  margin: 0 auto;
}

</style>
