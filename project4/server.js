require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()

app.all('/*', function(req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    if (req.method == 'OPTIONS') {
      res.status(200).end();
    } else {
      next();
    }
  });

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

