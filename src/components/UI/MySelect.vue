<template>
  <select class="my-select" v-model="modelValue" @change="changeOption">
    <option disabled value="">Select from the list</option>
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event){
      this.$emit("update:modelValue", event.target.value)
    }
  }
}
</script>

<style scoped>
  .my-select {
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    border: none;
    background-color: lightsteelblue;
    color: beige;
    font-size: 2rem;
    font-weight: bold;
    outline: none;
    cursor: pointer;
  }
</style>