<template>
  <div>
    <TopHeader />
    <NavHeader />
  </div>
</template>

<script>
import TopHeader from './TopHeader';
import NavHeader from './NavHeader';
export default {
  name: "appHeader",
  components: {
    TopHeader,
    NavHeader
  }
};
</script>

<style lang="scss">
</style>
