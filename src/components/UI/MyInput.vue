<template>
  <input class="input"
         type="text"
         :value="modelValue"
         @input="updateInput"
  />
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.input {
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  border: 2px solid transparent;
  outline: none;
  transition: border 0.3s linear;
  box-shadow: 0 0 3px gray;
}

.input:focus,
.input:hover{
  border: 2px solid cadetblue;
}
</style>