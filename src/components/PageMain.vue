
<script>
import PageCard from './PageCard.vue';
//anche il file json va importato come un componente!
//solo per prova. poi sarà import axios in App
import {store} from '../store'
export default {
    components:{
        PageCard,
        //però non è davvero un componente, quindi non va qui
    },
    data() {
        return {
            // fa parte dei nostri data quindi creare proprietà CARDS : CARDSJSON
            //ma siccome è un oggetto con un array dentro, CARDJSON.PRODUCTS
            //dichiariamo store tra i data
            store : store,
        }
    },
    methods: {
        // getDiscountPrice(price, discount) return tot = this.discountedPrice
    }
}

</script>

<template>
    <main class="main">
        <section class="container">
            <div class="row">
                <!--questo v-for diventa v-for='(Card, index) in cards'-->
                <!-- store contiene cards perchè lo hai scritto in store.js -->
                <!-- cards è l'oggetto che contiene i tuoi dati, con proprietà products  -->
                <PageCard v-for="(card, id) in store.cards.products"  
                :key="id"
                :carditem = 'card'
                class="col-4"
                />
                <!-- qui in PageCard, nel file padre, va la dichiarazione delle props così -->
                <!--:img='card.image'-->
                <!--ma possiamo passare anche l'oggetto CardItem='Card'-->
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
.main {
    padding-top: 50px;
    font-size: 12px;

    .container {
    padding: 20px;
    }
}

</style>