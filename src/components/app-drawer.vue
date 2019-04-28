<template>
  <div class="app-drawer">

    <div v-for="(item, i) in items"  :key="i" >

      <!-- Item -->
      <v-list class="item" dark :id="`drawerId${i}`" >
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title @click="goToDiv(i)">
              {{item.label}}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <!-- /Item -->

    </div>

  </div>
</template>

<script>
  export default {
    props: ["items"],
    methods: {
      goToDiv(index) {
        console.log({index})
        document.getElementById(`sectionId${index}`).scrollIntoView()
      },
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/components/app-drawer";
</style>
