<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<template>
    <header class="page-header">
        <div class="container">
        <nav class="navbar">
            <ul class="navbar_list">
                <li><a>Donna</a></li>
                <li><a>Uomo</a></li>
                <li><a>Bambini</a></li>
            </ul>
        <span class="logo">
            <img class="img-logo" src="/img/boolean-logo.png">
        </span>
            <ul class="navbar_list">
                <li><a>U</a></li>
                <li><a>O</a></li>
                <li><a>C</a></li>
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

.navbar {
    padding: 8px 0px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}

.navbar_list {
    display: flex;
    flex-wrap: wrap;
    column-gap: 10px;
}

.img-logo {
    height: 30px;
}

</style>