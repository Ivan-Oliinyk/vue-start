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
  box-shadow: 0 0 0.2rem gray;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .btn {
    inline-size: 20rem;
    margin-inline-start: auto;
  }
}

@media screen and (max-width: 366px) {
  .btn {
    inline-size: 100%;
  }
}

</style>