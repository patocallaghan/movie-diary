/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var moviesRouter = express.Router();
  var bodyParser = require('body-parser');

  function daysAgo(days) {
    var d = new Date();
    return d.setDate(d.getDate() - days);
  }

  function generateMovie(id, title, rating, review, date) {
    return {
      "type": "movies",
      "id": id,
      "attributes": {
        "title": title,
        "rating": rating,
        "review": review,
        "date-watched": date
      }
    }
  }

  var movies = [
    generateMovie(1, 'Casino', 5, 'this was the bomb', daysAgo(5)),
    generateMovie(2, 'Donnie Darko', 4, 'weird', daysAgo(345)),
    generateMovie(3, 'PS I Love You', 1, 'missus made me watch it', daysAgo(35)),
    generateMovie(4, 'La Haine', 3, 'sacre bleu!', daysAgo(124)),
    generateMovie(5, 'The Intern', 2, 'meh', daysAgo(78))
  ];

  moviesRouter.get('/', function(req, res) {
    res.send({
      'data': movies
    });
  });

  moviesRouter.post('/', function(req, res) {
    console.log('title ' + JSON.stringify(req.body));
    res.send({
      "data": {
        "type": "movies",
        "id": Math.floor(Math.random()*100),
        "attributes": {
          "title": "Cloverfield",
          "rating": 5,
          "review": "This was the shit!",
          "date-watched": Date.now()
        }
      }
    })
  });

  moviesRouter.get('/:id', function(req, res) {
    var requestedMovie = movies.filter(function(movie) {
      return movie.id == req.params.id
    });
    requestedMovie = requestedMovie.length ? requestedMovie[0] : {}
    res.send({
      'data': requestedMovie
    });
  });

  moviesRouter.put('/:id', function(req, res) {
    res.send({
      'movies': {
        id: req.params.id
      }
    });
  });

  moviesRouter.delete('/:id', function(req, res) {
    movies = movies.filter(function(movie) {
      return movie.id != req.params.id;
    });
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  // app.use('/movies', require('body-parser').json());
  app.use('/movies', require('body-parser').urlencoded({ limit: '2mb', extended: false  }));
  app.use('/movies', moviesRouter);
};
