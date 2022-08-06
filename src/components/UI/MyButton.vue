<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button"
}
</script>

<style scoped>
.btn {
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  background-color: darkseagreen;
  border: none;
  color: beige;
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s linear ;
  min-inline-size: 15rem;
  margin-inline-start: auto;
}

.btn:hover, .btn:focus {
  background-color: lightgreen;
}


@media screen and (max-width: 366px) {
  .btn {
    min-inline-size: 100%;
  }
}

</style>