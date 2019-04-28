<template>
  <div class="app-tab">
    <!-- Tab -->
    <div class="tabs-container">
      <div
        v-for="lang in langs"
        class="tab-container"
        @click="onChangeTab({ obj: lang })"
      >
        <div
          class="tab"
          :class="
            JSON.stringify(selectedLang) === JSON.stringify(lang)
              ? 'selected-tab'
              : 'unselected-tab'
          "
        >
          {{ lang.label }}
        </div>
      </div>
    </div>
    <!-- /Tab -->
  </div>
</template>

<script>
export default {
  props: ["selectedLang", "langs", "onChangeTab"]
};
</script>

<style scoped lang="scss">
@import "../assets/scss/components/app-tabs";
</style>
