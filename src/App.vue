<template>
  <div id="app">
    <div id="nav">
      <AppHeader></AppHeader>
    </div>
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import AppHeader from './components/layout/header';
import Footer from './components/layout/footer';

export default {
  components: {
    AppHeader,
    Footer
  }
}
</script>

<style lang="scss">
  #app{
    background: #f7f7f7;
  }
</style>
