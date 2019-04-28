<template>
  <div class="app-table">

    <v-data-table
      :headers="headers"
      :items="items"

      :hide-actions="true"
      class="elevation-0 vuetify-data-table"
    >
      <template v-slot:items="props">
        <td class="text-xs-left" v-for="(header, h) in headers" :key="h">
          {{ props.item[header.value] }}
        </td>
      </template>
    </v-data-table>

  </div>
</template>

<script>
  export default {
    props: ["headers", "items"]
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/components/app-table";
</style>
