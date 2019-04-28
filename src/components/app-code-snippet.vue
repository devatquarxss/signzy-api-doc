<template>
  <span class="app-code-snippet">

    {{ code }}

  </span>
</template>

<script>
  export default {
    props: ["code"]
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/components/app-code-snippet.scss";
</style>
