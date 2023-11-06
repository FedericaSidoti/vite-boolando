<script>
export default {
    data() {
        return {
            icons: [
                'A',
                'B',
                'C',
                'D',
                'E'
            ], 
            links: [
                'Informazioni legali',
                'Informativa privacy',
                'Diritto di recesso',
            ]
        }
    }
}
</script>

<template>
    <footer class="page-footer">
        <div class="container">
            <div class="navbar">
                <div>
                    <h5>Booleando srl</h5>
                    <ul class="navbar_list">
                        <li v-for="link in links">
                            <a>{{ link }}</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h5>Trovaci anche su</h5>
                    <ul class="navbar_list">
                        <li v-for="icon, index in icons">
                            <a>{{icon }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.page-footer {
    color: white;
    font-size: 10px;
    background-color: #1a1a1a;
    min-height: 30px;
}

h5 {
    font-size: 11px;
}

</style>