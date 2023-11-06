<script>
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
export default {
  components: {
    PageHeader,
    PageMain,
  },
  data() {
    return {
    }
  }
}

</script>

<template>
  <PageHeader/>
  <PageMain />
</template>

<style lang="scss">
@use './components/styles/general.scss'

</style>
