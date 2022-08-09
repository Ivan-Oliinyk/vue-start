<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
      <close-btn @click="hideDialog" />
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";

export default {
  name: "my-dialog",
  mixins: [toggleMixin]
};

</script>

<style scoped>
.dialog {
  position: fixed;
  inset-inline-end: 0;
  inset-inline-start: 0;
  inset-block-end: 0;
  inset-block-start: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  align-items: center;
  justify-items: center;
}

.dialog__content {
  position: relative;
  margin: auto;
  background-color: #fff;
  min-inline-size: 40rem;
  min-block-size: 2rem;
  border-radius: 0.5rem;
}

@media screen and (max-width: 576px) {
  .dialog__content {
    min-inline-size: 30rem;
  }
}
</style>
