/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var moviesRouter = express.Router();
  var bodyParser = require('body-parser');
  var _ = require('lodash');
  var Datastore = require('nedb')
    , db = new Datastore({ filename: 'db/movies.db', autoload: true  });

  function daysAgo(days) {
    var d = new Date();
    return d.setDate(d.getDate() - days);
  }

  function generateMovie(id, title, rating, review, date) {
    return {
      "type": "movies",
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
    db.find({ type: 'movies' }, function (err, docs) {
      res.send(generateJSONAPIResponse(docs));
    });
  });

  function generateJSONAPIResponse(response) {
    return {
      data: response
    };
  }

  moviesRouter.post('/', function(req, res) {
    var savedMovie = req.body.data.attributes;
    var movie = {
      "type": "movies",
      "attributes": {
        "title": savedMovie.title,
        "rating": savedMovie.rating,
        "review": savedMovie.review,
        "date-watched": Date.now()
      }
    };
    db.insert(movie, function (err, movie) {
      res.send(generateJSONAPIResponse(movie))
    });
  });

  moviesRouter.get('/:id', function(req, res) {
    db.findOne({ _id: req.params.id }, function (err, doc) {
      doc = doc ? doc : {}
      res.send(generateJSONAPIResponse(doc));
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
    db.remove({ _id: req.params.id }, function (err, numRemoved) {
      res.status(204).end();
    });
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  app.use('/movies', require('body-parser').json({type: 'application/vnd.api+json'}));
  app.use('/movies', moviesRouter);
};
