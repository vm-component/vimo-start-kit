<template>
    <Page>
        <Header>
            <Navbar>
                <Title>Hello Vimo</Title>
            </Navbar>
            <Toolbar>
                <Segment v-model="choose">
                    <SegmentButton value="value1">value1</SegmentButton>
                    <SegmentButton value="value2">value2</SegmentButton>
                    <SegmentButton value="value3">value3</SegmentButton>
                </Segment>
            </Toolbar>
        </Header>
        <Content class="hello">
            <img src="../assets/logo.png">
            <h1>{{ msg }}</h1>
            <h2>Essential Links</h2>
            <ul>
                <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
                <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
                <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
                <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
                <br>
                <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
            </ul>
            <h2>Ecosystem</h2>
            <ul>
                <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
                <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
                <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
                <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
            </ul>
        </Content>
    </Page>
</template>
<script>


  import { Segment, SegmentButton } from 'vimo/components/segment'

  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to  Vimo!',
        choose: 'value1'
      }
    },
    methods: {
      getData(){
        this.$config.get('getMemberUrl')
      }
    },
    components: {Segment, SegmentButton}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
