require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()


// app.use(cors({
//     origin: process.env.VUE_APP_CLIENT_URL,
//     optionsSuccessStatus: 200
// }))
app.use(bodyParser.json())
app.use(cors())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send(`You are listening to the smooth sounds of port ${process.env.PORT}`)
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`You're listening to the smooth sounds of port ${process.env.PORT}`)
})

