<script>
import PageHeader from "./components/PageHeader.vue";
import PageMain from "./components/PageMain.vue";
import PageFooter from "./components/PageFooter.vue";
import axios from "axios";
import { store } from './store';
export default {
  components: {
    PageHeader,
    PageMain,
    PageFooter,
  },
  data() {
    return {
      store,
    };
  },
  mounted() {
    console.log(this.store);
      axios.get("http://localhost:3000/products")
        .then(res =>{
          console.log(res.data)
            const products = res.data
            this.store.products = products
            console.log(this.store.products)
        })
  },
};
</script>

<template>
  <PageHeader />
  <PageMain />
  <PageFooter />
</template>

<style lang="scss">
@use "./components/styles/general.scss";
</style>
