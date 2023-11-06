<script>
export default {
    data() {
        return {
            cathegories: [
                'Uomo',
                'Donna',
                'Bambino',
            ],
            icons : [
                'U',
                'O',
                'C',
            ]
        }
    }
}
</script>

<template>
    <header class="page-header">
        <div class="container">
        <nav class="navbar">
            <ul class="navbar_list">
                <li v-for="(cathegory, index) in cathegories">
                    <a>{{ cathegory }}</a>
                </li>
            </ul>
        <span class="logo">
            <img class="img-logo" src="/img/boolean-logo.png">
        </span>
            <ul class="navbar_list">
                <li v-for="(icon, index) in icons">
                    <a>{{ icon }}</a>
                </li>
            </ul>
        </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
//@use '../styles/partials/variables' as *;
.page-header {
    min-height: 30px;
    background-color: #ff6900;
    color: white;
    font-size: 12px;
    position: fixed;  
    top: 0; 
    right: 0; 
    left: 0; 
    z-index: 999;
}

.img-logo {
    height: 30px;
}

</style>