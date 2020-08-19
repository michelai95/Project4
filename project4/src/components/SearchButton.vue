<template>
  <div id="search">
    <link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet">
    <form method="GET" id="search-form" @submit.prevent>
    <input id="searchBox" type="text" v-model="search" placeholder="search for ingredients here" />
      <div id="buttons">
        <input id="button1" type="submit" @click="getter" value="search" />
        <input id="button2" type="submit" value="next" />
      </div>
    </form>
    <section v-if="wrong">
    
    </section>
    <section v-else>
      {{ info }}
    </section>
  </div>
</template>

<script>
import axios from 'axios'
window.axios = require('axios')
require('dotenv').config()

export default {
  name: "Search",
  data() {
    return {
      info: null,
      wrong: false,
      search: "",
      url: process.env.VUE_APP_URL
    }
  },
      methods: {
        submit() {
          
          },
        getter() {
          axios.get(`http://localhost:3000/test/${this.search}`)
          .then(response => {
            console.log(response)
            let foodArray = (Object.entries(response.data.alternatives))
            this.info = foodArray.map(entry => {
              return entry[1].ingredient_name
            }) 
            console.log(this.info)
            })
          .catch(error => {this.wrong = true,
            console.log('🥕', error)
          })
        },
        },
          // filteredIngredients: function() {
          //   return this.info.filter(ingredient_name => {
          //     console.log(ingredient_name)
          //     return ingredient_name.searched_ingredient.toLowerCase().includes(this.search.toLowerCase()) 
          //   // could use .match instead of .includes
          //     })
          //   },
}
</script>

<style scoped>
#searchBox {
  text-align: center;
  font-family: 'Satisfy', cursive;
  font-size: 20px;
}
#button1, #button2 {
    width: 150px;
    height: 25px;
    border-radius: 4px;
    display: inline;
    margin: 0 auto;
    background-color: red;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
}
#button1 {
    margin-left: 20px;
}
#button1:hover, #button2:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
#buttons {
    padding: 5px;
}
</style>
