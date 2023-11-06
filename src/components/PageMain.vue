
<script>
export default {
    components:{
    },
    data() {
        return {
        }
    }
}

</script>

<template>
    <main class="debu main">
        <section class="container">
            <div class="row">
                <!-- -card-->
                <div v-for="n in 6"  :key="n" class="col-4">
                    <card class="card">
                        <figure class="figure">
                            <img src="/img/1.webp">
                            <img class="b-img" src="/img/1b.webp">
                            <div class="tag-container">
                                <span class="tag price">-30%</span>
                                <span class="tag description">Sostenibilità</span>
                            </div>
                            <span class="tag heart">&hearts;</span>
                        </figure>
                        <div>
                            <p>Lorem bla</p>
                            <h4>Lorem bla</h4>
                            <p class="current">Lorem bla <span class="old">lorem bla</span></p>
                        </div>
                    </card>
                </div>
                <!---fine card-->
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
.main {
    font-size: 12px;
    padding-top: 50px;

    .container {
    padding: 20px;
    }
}

h4 {
    text-transform: uppercase;
}

/*Cards*/

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