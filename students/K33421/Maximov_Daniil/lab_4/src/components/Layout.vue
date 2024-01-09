<script setup>

</script>

<template>
  <div class="container">
    <div class="form">
      <slot name="form"></slot>
    </div>

    <div class="list">
      <slot name="list"></slot>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  overflow: auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 50px
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.list {
  overflow: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>