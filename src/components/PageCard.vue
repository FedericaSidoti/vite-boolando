<script>
export default {
    data() {
        return {
            discounted : 0,
            currentIndex : 0,
        }
    },
    //qui vanno le props. img: String (chiave : tipo dato) MA MEGLIO card: Object
    //ancora meglio card : { type:Object, required: true }
    props : {
        carditem : Object
    },
    methods: {
        getPriceDiscounted (price, array) {

            for (let i = 0; i < array.length; i++) {
                const currentBadge = array[i]
                if (currentBadge.type === 'discount'){
                    const discountValueNegative = parseInt(currentBadge.value)
                    const discountValue = discountValueNegative * -1
                    
                    this.discounted = ((price/ 100)* discountValue );
                }
            }
            return this.discounted
        }
        
    }
}

</script>


<template>
        <card class="card">
            <figure class="figure">
                <!--vanno usate le props. :src='img'-->
                <!--se hai passato oggetto carditem => :src='CardItem.img'-->
                <!--NOTA: la props deve avere lo stesso nome nella dichiarazione, qui, e in props-->
                <img :src="/img/ + carditem.frontImage">
                <img class='b-img' :src="/img/ + carditem.backImage">
                <div class="tag-container">
                    <span v-for="badge, index in carditem.badges"
                    class="tag"
                    :class="badge.type==='discount'? 'price': 'description'"
                    >{{ badge.value }}</span>
                </div>
                <span class="heart" :class="carditem.isInFavorites ===true? 'text-red' : ''">&hearts;</span>
            </figure>
            <div>
                <p>{{ carditem.brand }}</p>
                <h4>{{ carditem.name }}</h4>
                <span 
                v-if="this.discounted!== 0" 
                class="final-price">{{this.discounted.toFixed(2)}}
                </span>
                <span 
                :class="this.discounted!== 0? 'original-price': 'final-price'">{{ carditem.price }} &euro;
                </span>
            </div>
        </card>
</template>

<style lang="scss" scoped>
.card {
    padding: 3px;
        &:hover .b-img {
        z-index: 1;
        }
}
.figure {
    position: relative; 
}

.b-img {
    position: absolute; 
    z-index: -1; 
    left: 0;
    top: 0; 
}

h4{
    text-transform: uppercase;
}
.original-price {
    color: black;
    text-decoration: line-through;
}

.final-price {
    color: red;
    margin-right: 5px;
}


/*tags and decorations*/

.heart {
    background-color: white;
    color: black;
    font-size: 18px;
    position: absolute;
    z-index: 2;
    padding: 8px;
    right: 0; 
    top: 20px; 
    
        &:hover {
        color: red;
        }
}

.tag-container {
    position: absolute;
    bottom: 35px;
    z-index: 2; 
    padding: 0 5px;

        .tag {
        color: white;
        font-size: 11px;
        padding: 5px 8px;
        }
}

.price {
    background-color: #ff0000;
}

.description {
    background-color: #008000;
    margin-right: 5px;
}

.text-red {
    color: red;
    }
</style>