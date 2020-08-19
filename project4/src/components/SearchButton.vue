<template>
  <div id="search">
    <link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet">
    <form method="GET" id="search-form" @submit.prevent>
    <input id="searchBox" type="text" :ingredient="ingredient" v-model="search" placeholder="search for ingredients here" />
      <div id="buttons">
        <input id="button1" type="submit" @click="getter" value="search" />
        <input id="button2" type="submit" value="next" />
      </div>
    <!-- <div id="single-ingredient" v-for="ingredient in filteredIngredients" :key="ingredient.searched_ingredients" /> -->
    <!-- {{ info }} -->
    <!-- <textarea id="ingredient" /> -->
    </form>
    <div v-if="errored">
      <p>I'm sorry, could you be more specific please?</p>
    </div>
    <div v-else>
      {{ info }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
window.axios = require('axios')
require('dotenv').config()

// const searchForm = document.getElementById('search-form')

// searchForm.addEventListener('submit', processSearch)
// function processSearch(e) {
//   e.preventDefault()
//   const search = searchForm.value
//   console.log({searchForm})
// }

export default {
  name: "Search",
  data() {
    return {
      info: null,
      errored: false,
      search: "",
      url: process.env.VUE_APP_URL,
      ingredient: [
        {
          searched_ingredient: "milk",
          ingredient_name: "whole milk",
        },
        {
          searched_ingredient: "gluten",
          ingredient_name: "cauliflower",
        },
      ]
    }
  },
      methods: {
        submit() {

          },
        getter() {
          axios.get(`http://localhost:3000/test/${this.search}`)
          .then(response => {this.info = response.data.alternatives})
          .catch(error => {this.error = true,
            console.log('🥕', error)
          })
        }
        },
      computed: {
        // filteredIngredients: function() {
        //   return this.ingredient.filter(spice => {
        //     console.log(spice)
        //     return spice.searched_ingredient.toLowerCase().includes(this.search.toLowerCase()) 
        //     // could use .match instead of .includes
        //     })
        //   } || []
        },
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
