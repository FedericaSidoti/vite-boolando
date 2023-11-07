
<script>
import PageCard from './PageCard.vue';
//anche il file json va importato come un componente!
import CardJSon from './db.json'
export default {
    components:{
        PageCard,
        //però non è davvero un componente, quindi non va qui
    },
    data() {
        return {
            // fa parte dei nostri data quindi creare proprietà CARDS : CARDSJSON
            //ma siccome è un oggetto con un array dentro, CARDJSON.PRODUCTS
            cards : CardJSon.products
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
                <PageCard v-for="(card, id) in cards"  
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