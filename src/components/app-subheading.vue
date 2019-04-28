<template>
  <div class="app-subheading">

    {{ text }}

  </div>
</template>

<script>
  export default {
    props: ["text"]
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/components/app-subheading";
</style>
