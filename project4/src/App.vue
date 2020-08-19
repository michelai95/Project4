<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <Egg />
    <Title msg="Try this instead..."/>
    <Search />
    <!-- <Button /> -->
    <Footer />
  </div>
</template>

<script>
import Title from './components/HelloWorld.vue'
// import axios from 'axios'
import Search from './components/SearchButton.vue'
import Egg from './components/Egg.vue'
// import Button from './components/Button.vue'
import Footer from './components/Footer'



export default {
  name: 'App',
  components: {
    Title,
    Search,
    // Button,
    Egg,
    Footer
    // Egg
  },
  devServer: {
     proxy: 'https://localhost:3000'
 } 
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 60px;
}
#searchBox {
  width: 400px;
  height: 30px;
}
#egg {
  height: 20px;
  width: 20px;
}
@media only screen and (max-width: 600px) {
}
@media only screen and (max-height: 00px) {
}

</style>
