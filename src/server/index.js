var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const Cors = require('cors')
const mockAPIResponse = require('./mockAPI.js')
var aylien = require('aylien_textapi')
const dotenv = require('dotenv')
dotenv.config()
console.log(`Your API key is ${process.env.API_KEY}`);

var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
})

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(Cors())

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

//POST route - extracts information frow aylien text api
app.post('/test', function (req, res) {
    const urlUser = req.body.url;
    console.log(urlUser);
    textapi.extract({
      url: urlUser,
      best_image: true
    }, function(error, response) {
      if (error === null) {
          console.log(response);
          res.send(response);
      }
    });
})
