var express = require('express'),
	path	= require('path'),
    app     = express(),
    server  = require('http').createServer(app);

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views/layouts'));

app.set('view engine', 'hbs');

  app.get('/', function(request, response){
    // request object is from the client,
    // the response is what were sending back
    response.send('Hey I the server finally works')
  });

  app.get('/stars', function(req, res){
  	res.send('the stars are shining bright')
  });

  app.get('/moons', function(req, res){
  	res.send({id: 2, name: 'nix', namefrom: 'nyx', planet: 'pluto'})
  });

  app.get('/planets', function(req, res){
  	res.send({id: 3, name: 'earth', habitable: true})
  });
  var content = {galaxies: ["milky way", "whirlpool", "starburst"]};
  app.get('/galaxies', function(req, res){
  	res.render('galaxies', content)
  });
  
  app.get('/home', function(req, res){
  	res.render('home', {street: "carmen", style: "apartment", rooms: 1, habited: true})
  });


  


// first argument is the port number
server.listen(5000, function(){
  console.log('server is listening, but on what port, are you reading the code?')
})
