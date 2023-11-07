<script>
export default {
    data() {
        return {
        }
    },
    //qui vanno le props. img: String (chiave : tipo dato) MA MEGLIO card: Object
    //ancora meglio card : { type:Object, required: true }
    props : {
        carditem : Object
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
                    <span v-for="badge in carditem.badges"
                    class="tag"
                    :class="badge.type==='discount'? 'price': 'description'"
                    >{{ badge.value }}</span>
                </div>
                <span class="heart" :class="carditem.isInFavorites ===true? 'text-red' : ''">&hearts;</span>
            </figure>
            <div>
                <p>{{ carditem.brand }}</p>
                <h4>{{ carditem.name }}</h4>
                <p class="discounted-price">Lorem bla 
                    <span class="original-price">{{ carditem.price }} &euro;</span>
                </p>
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


.discounted-price {
    color: red;
}

.original-price {
    color: black;
    text-decoration: line-through;
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
    
        // &:hover {
        // color: red;
        // }
}

.tag-container {
    position: absolute;
    bottom: 50px;
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