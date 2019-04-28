<template>
  <div class="documentation-layout">

    <!-- Documentation -->
    <div class="main-container">

      <!-- Drawer container -->
      <div class="drawer-container">
        <app-drawer :items="appDrawer"/>
      </div>
      <!-- /Drawer container -->

      <!-- Scrollable container -->
      <div class="scrollable-container">
        <router-view/>
      </div>
      <!-- /Scrollable container -->


      <!-- Open mobile/Tab drawer -->
      <a
        href="#offcanvas-slide"
        class="uk-button uk-button-default mobile-drawer-btn"
        uk-toggle
      >
        <div class="menu-btn">
          <img src="https://img.icons8.com/metro/26/000000/menu.png" class="icon"/>
          <div class="text">Menu</div>
        </div>
      </a>
      <!-- /Open mobile/Tab drawer -->

      <!-- Mobile/Tab drawer -->
      <div id="offcanvas-slide" uk-offcanvas>
        <div class="uk-offcanvas-bar">
          <app-drawer :items="appDrawer"/>
        </div>
      </div>
      <!-- /Mobile/Tab drawer -->


    </div>
    <!-- /Documentation -->

  </div>
</template>

<script>

  // Components
  import appDrawer from '@/components/app-drawer'

  // Mixins
  import appDrawerExt from '@/mixins/app-drawer'

  export default {
    mixins: [appDrawerExt],
    components: {
      'app-drawer': appDrawer
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/layouts/documentation";
</style>
