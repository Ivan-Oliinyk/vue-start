<template>
  <button class="close-btn">&times;</button>
</template>

<script>
export default {
  name: "close-btn",
};
</script>

<style scoped>
.close-btn {
  padding: 0.5rem;
  position: absolute;
  inset-block-start: 0;
  inset-inline-end: 0.5rem;
  color: indianred;
  border: none;
  background-color: transparent;
  font-size: 2.5rem;
  line-height: 1;
  font-weight: 700;
  cursor: pointer;
}
</style>
