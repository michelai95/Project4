require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { default: Axios } = require('axios')
const mongoose = require('mongoose')


const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))
// app.use('/test', require('./src/components/SearchButton.vue'))

app.get('/', (req, res) => {
    res.send(`You are listening to the smooth sounds of port ${process.env.PORT}`)
})

app.get('/test/:ingredient', (req, res) => {
    console.log("🍑",req.params)
    Axios.get(`${process.env.VUE_APP_URL}/${req.params.ingredient}/`, {
    'headers': { 
    'Authorization': `Token ${process.env.VUE_APP_ACCESS_TOKEN}`} 
    }).then(response => {
        // let results = data.about.alternatives
        console.log("🍞🍞data------", response.data)
        res.send(response.data)
    }).catch(error => {
    console.log('🍅', error)
    res.send({msg: "Error!!!!!"})
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`You're listening to the smooth sounds of port ${process.env.PORT}`)
})

