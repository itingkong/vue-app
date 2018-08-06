<template>
    <div id="app">
        <Sidebar></Sidebar>
    </div>
</template>

<script>
    // import HelloWorld from '@/components/HelloWorld'
    import Sidebar from 'components/sidebar'
    export default {
        name: 'App',
        components: { Sidebar }
    }
</script>

<style lang="scss" scoped>
    @import 'assets/common.scss';
    #app {
        width: 100%;
        height: 100%;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
