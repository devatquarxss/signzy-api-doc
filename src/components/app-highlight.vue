<template>
  <div
    class="app-highlight"
    :style="{ background: backgroundColor, color: htmlColor }"
  >
    <img :src="icon" class="icon" />
    <span v-for="(text, i) in texts" :key="i">

      <AppNormalStr v-if="text.type === 'normal-str'" v-html="text.value" />
      <AppCodeSnippet v-else-if="text.type === 'snippet'" :code="text.value" />

    </span>
  </div>
</template>

<script>
import AppCodeSnippet from "../components/app-code-snippet";
import AppNormalStr from "../components/app-normal-str";

export default {
  props: ["icon", "texts", "backgroundColor", "htmlColor"],

  components: {
    AppCodeSnippet,
    AppNormalStr
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/components/app-highlight";
</style>
