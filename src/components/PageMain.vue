
<script>
import PageCard from './PageCard.vue';
//anche il file json va importato come un componente!
import { store } from '../store'
export default {
    components:{
        PageCard,
    },
    data() {
        return {
            //dichiariamo store tra i data
            store: store,
            open: false,
            selectedProduct : {},
        }
    },
    methods: {
        showModal(param) {
            this.selectedProduct = param
            this.open = true
        },
        closeModal() {
            this.selectedProduct= {}
            this.open = false
        }
    },
}

</script>

<template>
    <main class="main">
        <section class="container">
            <div class="row">
                <!--questo v-for diventa v-for='(Card, index) in cards'-->
                <!-- store contiene cards perchè lo hai scritto in store.js -->
                <!-- cards è l'oggetto che contiene i tuoi dati, con proprietà products  -->
                <PageCard v-for="(card, id) in store.products"  
                :key="id"
                :carditem = 'card'
                class="col-4"
                @showModalInfo="showModal(card)"
                />
                <!-- qui in PageCard, nel file padre, va la dichiarazione delle props così -->
                <!--:img='card.image'-->
                <!--ma possiamo passare anche l'oggetto CardItem='Card'-->
            </div>
        </section>
        <!-- modale QUI  -->
        
    </main>
    <div v-if="open===true" class="modal-wrap">
        <div class="modal">
            <div class="title-wrap">
                <h1>{{selectedProduct.name }}</h1>
                <div class="icon" @click="closeModal">X</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.main {
    padding-top: 50px;
    font-size: 12px;

    .container {
    padding: 20px;
    }

}
.modal-wrap {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0; 
    background-color: black;
    opacity: 0.8;
    width: 100%;
    z-index: 10;
}
.modal {
    position: fixed;
    background-color: white;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 30px;
    margin: 0 auto;
    width: 500px;
}
.title-wrap {
    
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.icon {
    font-weight: bold;
    aspect-ratio: 1;
    border-radius: 50%; 
    border: 1px solid black;
    padding: 5px 7px; 
    cursor: pointer;
}

</style>