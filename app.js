var express = require('express')
var fetch = require('node-fetch')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: false
}))
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', function(request, response) {
  fetch('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC').then(function(response) {
    return response.json();
  }).then(function(body) {
    let index = Math.floor(Math.random() * body.data.length)
    console.log(index)
    response.render('view', {
      catId: body.data[index].id
    })
  }).catch(function(text) {
    console.log('error')
  });
})

app.get('/search', function(request, response) {
  response.render('search')
});

app.post('/search', function(request, response) {
  let str = request.body.searchBox
  let tmp = str.split(" ");
  str = tmp.join("+")
  fetch('http://api.giphy.com/v1/gifs/search?q=' + str + '&api_key=dc6zaTOxFJmzC').then(function(response) {
    return response.json();
  }).then(function(body) {
    let index = Math.floor(Math.random() * body.data.length)
    console.log(index)
    response.render('view', {
      catId: body.data[index].id
    })
  }).catch(function(text) {
    console.log('error')
  });
});


app.listen(3000, function() {
  console.log('listening on 3000')
})
