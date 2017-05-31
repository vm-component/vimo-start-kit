<template>
    <App id="app">
        <Nav>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </Nav>
    </App>
</template>
<script type="text/javascript">
  export default {
    name: 'app',
    mounted () { }
  }
</script>
<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        &span {
            color: red;
        }
    }
</style>
