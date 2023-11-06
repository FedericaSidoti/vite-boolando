<script>
export default {
    data() {
        return {
        }
    }
}
</script>


<template>
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
</template>