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
                    <span class="tag price">-30%</span>
                    <span class="tag description">Sostenibilità</span>
                </div>
                <span class="tag heart">&hearts;</span>
            </figure>
            <div>
                <p>Lorem bla</p>
                <h4>Lorem bla</h4>
                <p class="current">Lorem bla 
                    <span class="old">lorem bla</span>
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

.current {
    color: red;
}

.old {
    color: black;
    text-decoration: line-through;
}

/*tags and decorations*/

.tag{
    line-height: 20px;
    font-size: 11px;
    padding: 0 8px;
    position: absolute; 
    z-index: 2; 
    /*aspect-ratio: 1 se non dai line-height e padding!*/
}

.heart {
    background-color: white;
    color: black;
    font-size: 18px;
    right: 0; 
    top: 30px; 
    
        &:hover {
        color: red;
        }
}

.tag-container {
    position: absolute;
    bottom: 25px;
    z-index: 2; 

        .tag {
        position: static;
        display: inline-block;
        }
}

.price {
    background-color: #ff0000;
    color: white;
    bottom: 25px; 
    left: 0;
}

.description {
    background-color: #008000;
    color: white;
    bottom: 25px; 
    left: 0;
}
</style>