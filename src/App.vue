<template>
  <div id="app">
    <div id="nav">
      <AppHeader></AppHeader>
    </div>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from './components/layout/header';

export default {
  components: {
    AppHeader
  }
}
</script>

