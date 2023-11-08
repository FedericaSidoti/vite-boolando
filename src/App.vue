<script>
import PageHeader from "./components/PageHeader.vue";
import PageMain from "./components/PageMain.vue";
import PageFooter from "./components/PageFooter.vue";
import axios from "axios";
//import { store } from './store';
import store2 from "./store2";
export default {
  components: {
    PageHeader,
    PageMain,
    PageFooter,
  },
  data() {
    return {
      store2,
      productsURL: "http://localhost:3000/products",
    };
  },
  mounted() {
    console.log(this.store2);
    /*
        axios.get(this.productsURL)
        .then(res =>{
          console.log(res.data)
            const products = res.data
            this.store.products = products
            console.log(this.store.products)
        })
    }
    */
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
