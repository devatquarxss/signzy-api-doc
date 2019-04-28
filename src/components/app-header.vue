<template>
  <div class="app-header">

    {{ text }}

  </div>
</template>

<script>
  export default {
    props: ["text"]
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/components/app-header";
</style>
